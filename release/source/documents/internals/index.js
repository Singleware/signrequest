"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.LightSignatureFields = void 0;
// Exported internals.
var team_1 = require("./team");
Object.defineProperty(exports, "Team", { enumerable: true, get: function () { return team_1.Team; } });
var signinglog_1 = require("./signinglog");
Object.defineProperty(exports, "SigningLog", { enumerable: true, get: function () { return signinglog_1.SigningLog; } });
var prefill_1 = require("./prefill");
Object.defineProperty(exports, "PreFill", { enumerable: true, get: function () { return prefill_1.PreFill; } });
var user_1 = require("./user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
var sf_1 = require("./sf");
Object.defineProperty(exports, "SF", { enumerable: true, get: function () { return sf_1.SF; } });
/**
 * Light signature fields.
 */
exports.LightSignatureFields = [
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
];
/**
 * Request internals.
 */
var Request;
(function (Request) {
    /**
     * Light user fields.
     */
    Request.LightUserFields = ['email', 'firstName', 'lastName'];
})(Request = exports.Request || (exports.Request = {}));
//# sourceMappingURL=index.js.map