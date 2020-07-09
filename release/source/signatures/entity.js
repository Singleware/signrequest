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
const Integrations = require("../integrations");
const Internals = require("./internals");
const Types = require("./types");
/**
 * Signature entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.Alias('from_email'),
    RestDB.Schema.String(1, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fromEmail", void 0);
__decorate([
    RestDB.Schema.Alias('from_email_name'),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "fromEmailName", void 0);
__decorate([
    RestDB.Schema.Alias('is_being_prepared'),
    RestDB.Schema.Boolean(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "isBeingPrepared", void 0);
__decorate([
    RestDB.Schema.Alias('prepare_url'),
    RestDB.Schema.String(1),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "prepareUrl", void 0);
__decorate([
    RestDB.Schema.Alias('redirect_url'),
    RestDB.Schema.String(0, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "redirectUrl", void 0);
__decorate([
    RestDB.Schema.Alias('redirect_url'),
    RestDB.Schema.String(0, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "redirectUrlDeclined", void 0);
__decorate([
    RestDB.Schema.Alias('required_attachments'),
    RestDB.Schema.Array(Internals.Attachment),
    Class.Public()
], Entity.prototype, "requiredAttachments", void 0);
__decorate([
    RestDB.Schema.Alias('disable_attachments'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "disableAttachments", void 0);
__decorate([
    RestDB.Schema.Alias('disable_text_signatures'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "disableTextSignatures", void 0);
__decorate([
    RestDB.Schema.Alias('disable_text'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "disableText", void 0);
__decorate([
    RestDB.Schema.Alias('disable_date'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "disableDate", void 0);
__decorate([
    RestDB.Schema.Alias('disable_emails'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "disableEmails", void 0);
__decorate([
    RestDB.Schema.Alias('disable_upload_signatures'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "disableUploadSignatures", void 0);
__decorate([
    RestDB.Schema.Alias('disable_blockchain_proof'),
    RestDB.Schema.Boolean(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "disableBlockchainProof", void 0);
__decorate([
    RestDB.Schema.Alias('text_message_verification_locked'),
    RestDB.Schema.Boolean(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "textMessageVerificationLocked", void 0);
__decorate([
    RestDB.Schema.String(0, 512),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "subject", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "message", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Who)),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "who", void 0);
__decorate([
    RestDB.Schema.Alias('send_reminders'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Entity.prototype, "sendReminders", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Signer),
    Class.Public()
], Entity.prototype, "signers", void 0);
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Required(),
    RestDB.Schema.String(0, 36),
    Class.Public()
], Entity.prototype, "uuid", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "url", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "document", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Integrations.Types)),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "integration", void 0);
__decorate([
    RestDB.Schema.Alias('integration_data'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Entity.prototype, "integrationData", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('signrequests'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map