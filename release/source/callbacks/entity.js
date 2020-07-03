"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Crypto = require("crypto");
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Documents = require("../documents");
const Signatures = require("../signatures");
const Types = require("./types");
/**
 * Event entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Determines whether or not this event is valid according to the specified API token.
     * @param token Token.
     * @returns Returns true when the event is valid, false otherwise.
     */
    validate(token) {
        const hmac = Crypto.createHmac('sha256', token);
        hmac.update(`${this.eventTime}${this.eventType}`);
        return hmac.digest('hex') === this.eventHash;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 36),
    Class.Public()
], Entity.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Status)),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Object(Documents.Internals.Team),
    Class.Public()
], Entity.prototype, "team", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "timestamp", void 0);
__decorate([
    RestDB.Schema.Alias('token_name'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "tokenName", void 0);
__decorate([
    RestDB.Schema.Alias('event_type'),
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Event)),
    Class.Public()
], Entity.prototype, "eventType", void 0);
__decorate([
    RestDB.Schema.Alias('event_time'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "eventTime", void 0);
__decorate([
    RestDB.Schema.Alias('event_hash'),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "eventHash", void 0);
__decorate([
    RestDB.Schema.Object(Documents.Entity),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "document", void 0);
__decorate([
    RestDB.Schema.Object(Signatures.Responses.Internals.Signer),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "signer", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "validate", null);
Entity = __decorate([
    RestDB.Schema.Entity('events'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map