"use strict";
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Event types.
 */
var Event;
(function (Event) {
    Event["ConvertError"] = "convert_error";
    Event["Converted"] = "converted";
    Event["SendingError"] = "sending_error";
    Event["Sent"] = "sent";
    Event["Declined"] = "declined";
    Event["Cancelled"] = "cancelled";
    Event["Expired"] = "expired";
    Event["Signed"] = "signed";
    Event["Viewed"] = "viewed";
    Event["Downloaded"] = "downloaded";
    Event["SignerSigned"] = "signer_signed";
    Event["SignerEmailBounced"] = "signer_email_bounced";
    Event["SignerViewedEmail"] = "signer_viewed_email";
    Event["SignerViewed"] = "signer_viewed";
    Event["SignerForwarded"] = "signer_forwarded";
    Event["SignerDownloaded"] = "signer_downloaded";
    Event["SignRequestReceived"] = "signrequest_received";
})(Event = exports.Event || (exports.Event = {}));
//# sourceMappingURL=event.js.map