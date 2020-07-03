"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const requirement_1 = require("./requirement");
/**
 * Attachment entity class.
 */
let Attachment = class Attachment extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 36),
    Class.Public()
], Attachment.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.String(1, 255),
    Class.Public()
], Attachment.prototype, "name", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Attachment.prototype, "file", void 0);
__decorate([
    RestDB.Schema.Alias('for_attachment'),
    RestDB.Schema.Object(requirement_1.Requirement),
    RestDB.Schema.Null(),
    Class.Public()
], Attachment.prototype, "forAttachment", void 0);
Attachment = __decorate([
    RestDB.Schema.Entity('signatures/attachment'),
    Class.Describe()
], Attachment);
exports.Attachment = Attachment;
//# sourceMappingURL=attachment.js.map