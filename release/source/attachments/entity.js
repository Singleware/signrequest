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
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Attachment entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "url", void 0);
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 36),
    Class.Public()
], Entity.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "name", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "file", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_content'),
    RestDB.Schema.Base64(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fileFromContent", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_content_name'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fileFromContentName", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_url'),
    RestDB.Schema.String(0, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fileFromUrl", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "document", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('document-attachments'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map