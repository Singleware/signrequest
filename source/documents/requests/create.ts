/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Internals from './internals';

/**
 * Create document, entity class.
 */
@RestDB.Schema.Entity('documents')
@Class.Describe()
export class Create extends Internals.Entity {
  /**
   * User data.
   */
  @RestDB.Schema.Object(Internals.User)
  @Class.Public()
  public user?: Internals.User;
}
