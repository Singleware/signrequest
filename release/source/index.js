"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callbacks = exports.Signatures = exports.Attachments = exports.Documents = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var client_1 = require("./client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_1.Client; } });
// Imported aliases.
const Documents = require("./documents");
const Attachments = require("./attachments");
const Signatures = require("./signatures");
const Callbacks = require("./callbacks");
/**
 * Documents namespace.
 */
exports.Documents = Documents;
/**
 * Attachments namespace.
 */
exports.Attachments = Attachments;
/**
 * Signatures namespace.
 */
exports.Signatures = Signatures;
/**
 * Callbacks namespace.
 */
exports.Callbacks = Callbacks;
//# sourceMappingURL=index.js.map