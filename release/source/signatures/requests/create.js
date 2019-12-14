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
const Integrations = require("../../integrations");
const Types = require("../types");
const Internals = require("./internals");
/**
 * Create signature, entity class.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.Alias('from_email'),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fromEmail", void 0);
__decorate([
    RestDB.Schema.Alias('from_email_name'),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "fromEmailName", void 0);
__decorate([
    RestDB.Schema.Alias('is_being_prepared'),
    RestDB.Schema.Boolean(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "isBeingPrepared", void 0);
__decorate([
    RestDB.Schema.Alias('redirect_url'),
    RestDB.Schema.String(0, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "redirectUrl", void 0);
__decorate([
    RestDB.Schema.Alias('redirect_url'),
    RestDB.Schema.String(0, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "redirectUrlDeclined", void 0);
__decorate([
    RestDB.Schema.Alias('required_attachments'),
    RestDB.Schema.Array(Internals.Requirement),
    Class.Public()
], Create.prototype, "requiredAttachments", void 0);
__decorate([
    RestDB.Schema.Alias('disable_attachments'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "disableAttachments", void 0);
__decorate([
    RestDB.Schema.Alias('disable_text_signatures'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "disableTextSignatures", void 0);
__decorate([
    RestDB.Schema.Alias('disable_text'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "disableText", void 0);
__decorate([
    RestDB.Schema.Alias('disable_date'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "disableDate", void 0);
__decorate([
    RestDB.Schema.Alias('disable_emails'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "disableEmails", void 0);
__decorate([
    RestDB.Schema.Alias('disable_upload_signatures'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "disableUploadSignatures", void 0);
__decorate([
    RestDB.Schema.Alias('disable_blockchain_proof'),
    RestDB.Schema.Boolean(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "disableBlockchainProof", void 0);
__decorate([
    RestDB.Schema.Alias('text_message_verification_locked'),
    RestDB.Schema.Boolean(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "textMessageVerificationLocked", void 0);
__decorate([
    RestDB.Schema.String(0, 512),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "subject", void 0);
__decorate([
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "message", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Who)),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "who", void 0);
__decorate([
    RestDB.Schema.Alias('send_reminders'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Create.prototype, "sendReminders", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Signer),
    Class.Public()
], Create.prototype, "signers", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "document", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Integrations.Types)),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "integration", void 0);
__decorate([
    RestDB.Schema.Alias('integration_data'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Create.prototype, "integrationData", void 0);
Create = __decorate([
    RestDB.Schema.Entity('signrequests'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map