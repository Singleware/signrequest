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
const Commons = require("../../commons");
const prefill_1 = require("./prefill");
const sf_1 = require("./sf");
/**
 * Document entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Alias('external_id'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "externalId", void 0);
__decorate([
    RestDB.Schema.Alias('frontend_id'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "frontendId", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_url'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fileFromUrl", void 0);
__decorate([
    RestDB.Schema.Alias('events_callback_url'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "eventsCallbackUrl", void 0);
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
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "template", void 0);
__decorate([
    RestDB.Schema.Alias('prefill_tags'),
    RestDB.Schema.Array(prefill_1.Prefill),
    Class.Public()
], Entity.prototype, "prefillTags", void 0);
__decorate([
    RestDB.Schema.Array(Commons.Integration),
    Class.Public()
], Entity.prototype, "integrations", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_sf'),
    RestDB.Schema.Object(sf_1.SF),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fileFromSF", void 0);
__decorate([
    RestDB.Schema.Alias('auto_delete_days'),
    RestDB.Schema.Integer(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoDeleteDays", void 0);
__decorate([
    RestDB.Schema.Alias('auto_expire_days'),
    RestDB.Schema.Integer(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoExpireDays", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('documents/entity'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map