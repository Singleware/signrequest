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
const Requests = require("./requests");
const Responses = require("./responses");
const client_1 = require("../client");
/**
 * Attachments mapper class.
 */
let Mapper = class Mapper extends RestDB.Mapper {
    /**
     * Default constructor.
     * @param dependencies Mapper dependencies.
     */
    constructor(dependencies) {
        super(dependencies.client, Responses.Entity);
        this.client = dependencies.client;
    }
    /**
     * Creates a new attachment request.
     * @param request Attachment creation request.
     * @returns Returns a promise to get the attachment entity or undefined when the operation has been failed.
     */
    async create(request) {
        if ((await super.insertEx(Requests.Create, request)) !== void 0) {
            return RestDB.Outputer.createFull(Responses.Entity, this.client.payload, []);
        }
        return void 0;
    }
    /**
     * Loads the attachment that corresponds to the specified Id.
     * @param id Attachment Id.
     * @returns Returns a promise to get the attachment entity or undefined when the attachment wasn't found.
     */
    async load(id) {
        return await super.findById(id);
    }
};
__decorate([
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
Mapper = __decorate([
    Injection.Inject(client_1.Client),
    Injection.Describe({ singleton: true, name: 'attachments' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map