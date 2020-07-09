"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
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
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insert result.
     * @throws Throws an error when the server response is invalid.
     */
    getInsertResponse(model, response) {
        this.lastPayload = response.payload;
        if (response.status.code !== 201) {
            throw new Error(`Unexpected insert(${response.input.method}) response status: ${response.status.code}`);
        }
        else if (!(this.lastPayload instanceof Object)) {
            throw new Error(`Response body must have an object.`);
        }
        return this.lastPayload.uuid;
    }
    /**
     * Get the found entity from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity or undefined when the entity wasn't found.
     * @throws Throws an error when the server response is invalid.
     */
    getFindByIdResponse(model, response) {
        this.lastPayload = response.payload;
        if (response.status.code !== 200) {
            throw new Error(`Unexpected find(${response.input.method}) response status: ${response.status.code}`);
        }
        else if (!(this.lastPayload instanceof Object)) {
            throw new Error(`Response payload must be an object.`);
        }
        return this.lastPayload;
    }
    /**
     * Get the updated entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the updated entity status.
     * @throws Throws an error when the server response is invalid.
     */
    getUpdateByIdResponse(model, response) {
        this.lastPayload = response.payload;
        if (response.status.code !== 200) {
            throw new Error(`Unexpected update(${response.input.method}) response status: ${response.status.code}`);
        }
        else if (!(this.lastPayload instanceof Object)) {
            throw new Error(`Response payload must be an object.`);
        }
        return true;
    }
    /**
     * Get the deleted entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the deleted entity status.
     */
    getDeleteByIdResponse(model, response) {
        this.lastPayload = response.payload;
        return response.status.code === 204;
    }
    /**
     * Get the request query string based on the specified entity model, filters and fields.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Fields to select.
     * @returns Returns the instance itself.
     * @throws Throws an error when used with filters or selected fields. (Features doesn't supported)
     */
    getRequestQuery(model, query, select) {
        if (query || (select && select.length > 0)) {
            throw new Error(`Query filter and Selected fields aren't supported.`);
        }
        return '/';
    }
    /**
     * Get the request Id based on the specified entity model and entity Id.
     * @param model Entity model.
     * @param id Entity Id.
     * @returns Returns the request Id.
     */
    getRequestId(model, id) {
        return `${super.getRequestId(model, id)}/`;
    }
    /**
     * Get the last request payload.
     */
    get payload() {
        return this.lastPayload;
    }
    /**
     * Set the authorization token for all subsequent requests.
     * @param token Username.
     * @param password Password.
     * @returns Returns the instance itself.
     */
    setAuthorization(token) {
        this.setAuthHeader('Authorization', `Token ${token}`);
        return this;
    }
};
__decorate([
    Class.Private()
], Client.prototype, "lastPayload", void 0);
__decorate([
    Class.Protected()
], Client.prototype, "getInsertResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getFindByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getUpdateByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getDeleteByIdResponse", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestQuery", null);
__decorate([
    Class.Protected()
], Client.prototype, "getRequestId", null);
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