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
const Integrations = require("../../integrations");
const Internals = require("../internals");
/**
 * Create document, entity class.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.Object(Internals.User, Internals.Request.LightUserFields),
    Class.Public()
], Create.prototype, "user", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "name", void 0);
__decorate([
    RestDB.Schema.Alias('external_id'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "externalId", void 0);
__decorate([
    RestDB.Schema.Alias('frontend_id'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "frontendId", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_url'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fileFromUrl", void 0);
__decorate([
    RestDB.Schema.Alias('events_callback_url'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "eventsCallbackUrl", void 0);
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
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "template", void 0);
__decorate([
    RestDB.Schema.Alias('prefill_tags'),
    RestDB.Schema.Array(Internals.PreFill),
    Class.Public()
], Create.prototype, "preFillTags", void 0);
__decorate([
    RestDB.Schema.Array(Integrations.Entity),
    Class.Public()
], Create.prototype, "integrations", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_sf'),
    RestDB.Schema.Object(Internals.SF),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fileFromSF", void 0);
__decorate([
    RestDB.Schema.Alias('auto_delete_days'),
    RestDB.Schema.Integer(1, 730),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "autoDeleteDays", void 0);
__decorate([
    RestDB.Schema.Alias('auto_expire_days'),
    RestDB.Schema.Integer(1, 730),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "autoExpireDays", void 0);
Create = __decorate([
    RestDB.Schema.Entity('documents'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map