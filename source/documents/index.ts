/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Mapper } from './mapper';

// Imported aliases.
import * as Commons from './commons';
import * as Requests from './requests';
import * as Responses from './responses';

// Exported aliases
export import Entity = Responses.Entity;

/**
 * Commons namespace.
 */
export import Commons = Commons;

/**
 * Requests namespace.
 */
export import Requests = Requests;

/**
 * Responses namespace.
 */
export import Responses = Responses;
