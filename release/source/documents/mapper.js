"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Requests = require("./requests");
const client_1 = require("../client");
const entity_1 = require("./entity");
/**
 * Documents mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the last request payload.
     */
    get payload() {
        return this.lastPayload;
    }
    /**
     * Create a new document request.
     * @param request Document creation request.
     * @returns Returns a promise to get the document Id.
     * @throws Throws an error when the server response is invalid.
     */
    async create(request) {
        this.lastPayload = void 0;
        const uuid = await this.mapper.insertEx(Requests.Create, request);
        if (uuid === void 0) {
            throw new Error(`Unexpected server response.`);
        }
        this.lastPayload = RestDB.Outputer.createFull(entity_1.Entity, this.client.payload, []);
        return uuid;
    }
    /**
     * Read the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get the document entity or undefined when it wasn't found.
     */
    async read(id) {
        this.lastPayload = void 0;
        this.lastPayload = await this.mapper.findById(id);
        return this.lastPayload;
    }
    /**
     * Delete the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get true when the removal was successful, false otherwise.
     */
    async delete(id) {
        this.lastPayload = void 0;
        return (await this.mapper.deleteById(id));
    }
};
__decorate([
    Class.Private()
], Mapper.prototype, "lastPayload", void 0);
__decorate([
    Injection.Inject(() => client_1.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "payload", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "read", null);
__decorate([
    Class.Public()
], Mapper.prototype, "delete", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'documents' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map