"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Team entity class.
 */
let Team = class Team extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(1),
    Class.Public()
], Team.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Pattern(/^[-a-zA-Z0-9_]+/),
    Class.Public()
], Team.prototype, "subdomain", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Team.prototype, "url", void 0);
Team = __decorate([
    RestDB.Schema.Entity('documents/team'),
    Class.Describe()
], Team);
exports.Team = Team;
//# sourceMappingURL=team.js.map