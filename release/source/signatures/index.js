"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Responses = exports.Requests = exports.Types = void 0;
/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var mapper_1 = require("./mapper");
Object.defineProperty(exports, "Mapper", { enumerable: true, get: function () { return mapper_1.Mapper; } });
var entity_1 = require("./entity");
Object.defineProperty(exports, "Entity", { enumerable: true, get: function () { return entity_1.Entity; } });
// Imported aliases.
const Types = require("./types");
const Requests = require("./requests");
const Responses = require("./responses");
/**
 * Types namespace.
 */
exports.Types = Types;
/**
 * Requests namespace.
 */
exports.Requests = Requests;
/**
 * Responses namespace.
 */
exports.Responses = Responses;
//# sourceMappingURL=index.js.map