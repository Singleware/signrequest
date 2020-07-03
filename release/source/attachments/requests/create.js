"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Create attachment, entity class.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_content'),
    RestDB.Schema.Base64(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fileFromContent", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_content_name'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fileFromContentName", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_url'),
    RestDB.Schema.String(0, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fileFromUrl", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "document", void 0);
Create = __decorate([
    RestDB.Schema.Entity('document-attachments'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map