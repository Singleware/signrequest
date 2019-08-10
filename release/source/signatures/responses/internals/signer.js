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
const input_1 = require("./input");
const attachment_1 = require("./attachment");
/**
 * Signer entity class.
 */
let Signer = class Signer extends Commons.Signer {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Alias('display_name'),
    RestDB.Schema.String(1, 255),
    Class.Public()
], Signer.prototype, "displayName", void 0);
__decorate([
    RestDB.Schema.Alias('email_viewed'),
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "emailViewed", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "viewed", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "downloaded", void 0);
__decorate([
    RestDB.Schema.Alias('signed_on'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "signedOn", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "emailed", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "declined", void 0);
__decorate([
    RestDB.Schema.Alias('declined_on'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "declinedOn", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Signer.prototype, "forwarded", void 0);
__decorate([
    RestDB.Schema.Alias('forwarded_on'),
    RestDB.Schema.Date(),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "forwardedOn", void 0);
__decorate([
    RestDB.Schema.Alias('forwarded_to_email'),
    RestDB.Schema.String(1, 255),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "forwardedToEmail", void 0);
__decorate([
    RestDB.Schema.Alias('forwarded_reason'),
    RestDB.Schema.String(1),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "forwardedReason", void 0);
__decorate([
    RestDB.Schema.String(1),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "message", void 0);
__decorate([
    RestDB.Schema.Array(input_1.Input),
    Class.Public()
], Signer.prototype, "inputs", void 0);
__decorate([
    RestDB.Schema.Alias('embed_url'),
    RestDB.Schema.String(1),
    RestDB.Schema.Null(),
    Class.Public()
], Signer.prototype, "embedUrl", void 0);
__decorate([
    RestDB.Schema.Array(attachment_1.Attachment),
    Class.Public()
], Signer.prototype, "attachments", void 0);
Signer = __decorate([
    RestDB.Schema.Entity('signatures/signer'),
    Class.Describe()
], Signer);
exports.Signer = Signer;
//# sourceMappingURL=signer.js.map