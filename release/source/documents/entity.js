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
const Attachments = require("../attachments");
const Signatures = require("../signatures");
const Integrations = require("../integrations");
const Types = require("./types");
const Internals = require("./internals");
const Responses = require("./responses");
/**
 * Document entity class.
 */
let Entity = class Entity extends Class.Null {
};
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
    RestDB.Schema.Primary(),
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 36),
    Class.Public()
], Entity.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.Object(Responses.Internals.User),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "user", void 0);
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
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "file", void 0);
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
    RestDB.Schema.Array(Internals.PreFill),
    Class.Public()
], Entity.prototype, "preFillTags", void 0);
__decorate([
    RestDB.Schema.Array(Integrations.Entity),
    Class.Public()
], Entity.prototype, "integrations", void 0);
__decorate([
    RestDB.Schema.Alias('file_from_sf'),
    RestDB.Schema.Object(Internals.SF),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fileFromSF", void 0);
__decorate([
    RestDB.Schema.Alias('auto_delete_days'),
    RestDB.Schema.Integer(1, 730),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoDeleteDays", void 0);
__decorate([
    RestDB.Schema.Alias('auto_expire_days'),
    RestDB.Schema.Integer(1, 730),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoExpireDays", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "pdf", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Status)),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Alias('signrequest'),
    RestDB.Schema.Object(Signatures.Entity, [
        'fromEmail',
        'fromEmailName',
        'isBeingPrepared',
        'prepareUrl',
        'redirectUrl',
        'redirectUrlDeclined',
        'requiredAttachments',
        'disableAttachments',
        'disableTextSignatures',
        'disableText',
        'disableDate',
        'disableEmails',
        'disableUploadSignatures',
        'disableBlockchainProof',
        'textMessageVerificationLocked',
        'subject',
        'message',
        'who',
        'sendReminders',
        'signers',
        'uuid'
    ]),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "signRequest", void 0);
__decorate([
    RestDB.Schema.Alias('api_used'),
    RestDB.Schema.Required(),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "apiUsed", void 0);
__decorate([
    RestDB.Schema.Alias('signing_log'),
    RestDB.Schema.Object(Internals.SigningLog),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "signingLog", void 0);
__decorate([
    RestDB.Schema.Alias('security_hash'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "securityHash", void 0);
__decorate([
    RestDB.Schema.Array(Attachments.Entity),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "attachments", void 0);
__decorate([
    RestDB.Schema.Alias('auto_delete_after'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoDeleteAfter", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "sandbox", void 0);
__decorate([
    RestDB.Schema.Alias('auto_expire_after'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "autoExpireAfter", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "processing", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('documents'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map