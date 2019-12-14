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
const Integrations = require("../../../integrations");
const Types = require("../../types");
/**
 * Signer entity class.
 */
let Signer = class Signer extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(1, 255),
    Class.Public()
], Signer.prototype, "email", void 0);
__decorate([
    RestDB.Schema.Alias('first_name'),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Signer.prototype, "firstName", void 0);
__decorate([
    RestDB.Schema.Alias('last_name'),
    RestDB.Schema.String(0, 255),
    Class.Public()
], Signer.prototype, "lastName", void 0);
__decorate([
    RestDB.Schema.Alias('needs_to_sign'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "needsToSign", void 0);
__decorate([
    RestDB.Schema.Alias('approve_only'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "approveOnly", void 0);
__decorate([
    RestDB.Schema.Alias('notify_only'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "notifyOnly", void 0);
__decorate([
    RestDB.Schema.Alias('in_person'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "inPerson", void 0);
__decorate([
    RestDB.Schema.Integer(0, 2147483647),
    Class.Public()
], Signer.prototype, "order", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Language)),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "language", void 0);
__decorate([
    RestDB.Schema.Alias('force_language'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "forceLanguage", void 0);
__decorate([
    RestDB.Schema.Alias('verify_phone_number'),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "verifyPhoneNumber", void 0);
__decorate([
    RestDB.Schema.Alias('verify_bank_account'),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "verifyBankAccount", void 0);
__decorate([
    RestDB.Schema.Alias('embed_url_user_id'),
    RestDB.Schema.String(0, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "embedUrlUerId", void 0);
__decorate([
    RestDB.Schema.Alias('use_stamp_for_approve_only'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "useStampForApproveOnly", void 0);
__decorate([
    RestDB.Schema.Alias('redirect_url'),
    RestDB.Schema.String(1, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "redirectUrl", void 0);
__decorate([
    RestDB.Schema.Alias('redirect_url'),
    RestDB.Schema.String(1, 2100),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "redirectUrlDeclined", void 0);
__decorate([
    RestDB.Schema.Alias('after_document'),
    RestDB.Schema.String(),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "afterDocument", void 0);
__decorate([
    RestDB.Schema.Array(Integrations.Entity),
    Class.Public()
], Signer.prototype, "integrations", void 0);
__decorate([
    RestDB.Schema.String(1),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "password", void 0);
Signer = __decorate([
    RestDB.Schema.Entity('signatures/signer'),
    Class.Describe()
], Signer);
exports.Signer = Signer;
//# sourceMappingURL=signer.js.map