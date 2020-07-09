"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
// Exported internals.
var input_1 = require("./input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return input_1.Input; } });
var signer_1 = require("./signer");
Object.defineProperty(exports, "Signer", { enumerable: true, get: function () { return signer_1.Signer; } });
var requirement_1 = require("./requirement");
Object.defineProperty(exports, "Requirement", { enumerable: true, get: function () { return requirement_1.Requirement; } });
var attachment_1 = require("./attachment");
Object.defineProperty(exports, "Attachment", { enumerable: true, get: function () { return attachment_1.Attachment; } });
/**
 * Request internals.
 */
var Request;
(function (Request) {
    /**
     * Light signer fields.
     */
    Request.LightSignerFields = [
        'email',
        'firstName',
        'lastName',
        'needsToSign',
        'approveOnly',
        'notifyOnly',
        'inPerson',
        'order',
        'language',
        'forceLanguage',
        'verifyPhoneNumber',
        'verifyBankAccount',
        'embedUrlUserId',
        'useStampForApproveOnly',
        'redirectUrl',
        'redirectUrlDeclined',
        'afterDocument',
        'integrations',
        'password'
    ];
})(Request = exports.Request || (exports.Request = {}));
//# sourceMappingURL=index.js.map