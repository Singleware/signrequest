/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Commons from '../../commons';

/**
 * User entity class.
 */
@RestDB.Schema.Entity('documents/user')
@Class.Describe()
export class User extends Commons.User {}
