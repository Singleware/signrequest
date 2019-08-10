/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Integration entity class.
 */
@RestDB.Schema.Entity('documents/integration')
@Class.Describe()
export class Integration extends Class.Null {
  /**
   * Integration type.
   */
  @RestDB.Schema.Enumeration(...Object.values(Types.Integration))
  @RestDB.Schema.Null()
  @Class.Public()
  public integration?: Types.Integration | null;

  /**
   * Integration data.
   */
  @RestDB.Schema.Alias('integration_data')
  @RestDB.Schema.String()
  @Class.Public()
  public integrationData?: string;
}
