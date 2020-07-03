"use strict";
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
/**
 * Document status types.
 */
var Status;
(function (Status) {
    Status["Converting"] = "co";
    Status["New"] = "ne";
    Status["Sent"] = "se";
    Status["Viewed"] = "vi";
    Status["Signed"] = "si";
    Status["Downloaded"] = "do";
    Status["SignedAndDownloaded"] = "sd";
    Status["Cancelled"] = "ca";
    Status["Declined"] = "de";
    Status["ErrorConverting"] = "ec";
    Status["ErrorSending"] = "es";
    Status["Expired"] = "xp";
})(Status = exports.Status || (exports.Status = {}));
//# sourceMappingURL=status.js.map