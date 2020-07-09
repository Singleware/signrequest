"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Input entity class.
 */
let Input = class Input extends Class.Null {
};
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Input)),
    RestDB.Schema.Null(),
    Class.Public()
], Input.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Alias('page_index'),
    RestDB.Schema.Integer(),
    Class.Public()
], Input.prototype, "pageIndex", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Input.prototype, "text", void 0);
__decorate([
    RestDB.Schema.Alias('checkbox_value'),
    RestDB.Schema.Boolean(),
    RestDB.Schema.Null(),
    Class.Public()
], Input.prototype, "checkboxValue", void 0);
__decorate([
    RestDB.Schema.Alias('date_value'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Input.prototype, "dateValue", void 0);
__decorate([
    RestDB.Schema.Alias('external_id'),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Input.prototype, "externalId", void 0);
__decorate([
    RestDB.Schema.Alias('placeholder_uuid'),
    RestDB.Schema.String(0, 36),
    RestDB.Schema.Null(),
    Class.Public()
], Input.prototype, "placeholderUuid", void 0);
Input = __decorate([
    RestDB.Schema.Entity('signatures/input'),
    Class.Describe()
], Input);
exports.Input = Input;
//# sourceMappingURL=input.js.map