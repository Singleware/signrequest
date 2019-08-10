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
const RestDB = require("@singleware/restdb");
const Types = require("../../types");
const Internals = require("./internals");
/**
 * Document entity class.
 */
let Entity = class Entity extends Internals.Entity {
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 36),
    Class.Public()
], Entity.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.Object(Internals.User),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "user", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "file", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "url", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Team),
    Class.Public()
], Entity.prototype, "team", void 0);
__decorate([
    RestDB.Schema.Alias('file_as_pdf'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fileAsPdf", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "pdf", void 0);
__decorate([
    RestDB.Schema.Alias('security_hash'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "securityHash", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(...Object.values(Types.Status)),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Array(Internals.Attachment),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "attachments", void 0);
__decorate([
    RestDB.Schema.Alias('api_used'),
    RestDB.Schema.Required(),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "apiUsed", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "sandbox", void 0);
__decorate([
    RestDB.Schema.Alias('auto_delete_after'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoDeleteAfter", void 0);
__decorate([
    RestDB.Schema.Alias('auto_expire_after'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoExpireAfter", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('documents'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map