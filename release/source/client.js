"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const SignatureRequests = require("./signatures/requests");
/**
 * Client driver class.
 */
let Client = class Client extends RestDB.Driver {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        this.connect('https://signrequest.com/api/v1');
    }
    /**
     * Gets the request Id based on the specified entity model and entity Id.
     * @param model Entity model.
     * @param id Entity Id.
     * @returns Returns the request Id.
     */
    getRequestId(model, id) {
        return `${super.getRequestId(model, id)}/`;
    }
    /**
     * Gets the request query string based on the specified entity model, fields and query filter.
     * @param model Entity model.
     * @param query Query filter.
     * @param select Optional fields to select.
     * @returns Returns the parsed query string.
     * @throws Throws an error when used with filters or select fields. (Feature not supported)
     */
    getRequestQuery(model, query, select) {
        if (query || (select && select.length > 0)) {
            throw new Error(`Query filter and Selected fields aren't supported.`);
        }
        return '/';
    }
    /**
     * Gets the request method based on the specified entity model.
     * @param model Entity model.
     * @param method Request method.
     * @returns Returns the request method.
     */
    getRequestMethod(model, method) {
        switch (model) {
            case SignatureRequests.Cancel:
            case SignatureRequests.Resend:
                return RestDB.Method.POST;
            default:
                return method;
        }
    }
    /**
     * Gets the result Id from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the result Id or undefined when the result Id was not found.
     * @throws Throws an error when the response body doesn't contains the insert results.
     */
    getInsertResponse(model, response) {
        this.payloadData = void 0;
        if (response.status.code === 201) {
            if (!(response.payload instanceof Object) || (this.payloadData = response.payload).uuid === void 0) {
                throw new Error(`The response body must be an object containing the insert uuid.`);
            }
            return this.payloadData.uuid;
        }
        return void 0;
    }
    /**
     * Gets the updated entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the updated entity status or a promise to get it.
     */
    getUpdateByIdResponse(model, response) {
        this.payloadData = void 0;
        if (response.status.code === 200) {
            if (!(response.payload instanceof Object)) {
                throw new Error(`The response body must be an object containing the response results.`);
            }
            this.payloadData = response.payload;
            switch (model) {
                case SignatureRequests.Cancel:
                    return this.payloadData.cancelled === true;
                case SignatureRequests.Resend:
                    return this.payloadData.detail === 'OK';
                default:
                    throw new Error(`Unsupported request entity.`);
            }
        }
        return false;
    }
    /**
     * Gets the found entity from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity, a promise to get it or undefined when the entity was not found.
     */
    getFindByIdResponse(model, response) {
        if (response.status.code === 200) {
            return response.payload;
        }
        return void 0;
    }
    /**
     * Gets the deleted entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the deleted entity status.
     */
    getDeleteByIdResponse(model, response) {
        return response.status.code === 204;
    }
    /**
     * Notify an error in the given response entity for all listeners.
     * @param model Entity model.
     * @param response Response entity.
     */
    async notifyErrorResponse(model, response) {
        this.payloadData = void 0;
        if (response.payload instanceof Object) {
            this.payloadData = response.payload;
            await super.notifyErrorResponse(model, response);
            throw new Error(`Endpoint error, please check the payload.`);
        }
        else {
            await super.notifyErrorResponse(model, response);
            throw new Error(`Server error: ${response.status.message}.`);
        }
    }
    /**
     * Gets the payload from the last request.
     */
    get payload() {
        return this.payloadData;
    }
    /**
     * Sets the authorization token for all subsequent requests.
     * @param token Username.
     * @param password Password.
     * @returns Returns the client instance.
     */
    setAuthorization(token) {
        return this.setHeader('Authorization', `Token ${token}`), this;
    }
};
__decorate([
    Class.Private()
], Client.prototype, "payloadData", void 0);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestId", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestQuery", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestMethod", null);
__decorate([
    Class.Protected()
], Client.prototype, "getInsertResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getUpdateByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getFindByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getDeleteByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "notifyErrorResponse", null);
__decorate([
    Class.Public()
], Client.prototype, "payload", null);
__decorate([
    Class.Public()
], Client.prototype, "setAuthorization", null);
Client = __decorate([
    Injection.Describe({ singleton: true, name: 'client' }),
    Class.Describe()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map