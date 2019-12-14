/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Types } from './types';

/**
 * Integration entity class.
 */
@RestDB.Schema.Entity('integrations')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Integration type.
   */
  @RestDB.Schema.Enumeration(Object.values(Types))
  @RestDB.Schema.Null()
  @Class.Public()
  public integration?: Types | null;

  /**
   * Integration data.
   */
  @RestDB.Schema.Alias('integration_data')
  @RestDB.Schema.String()
  @Class.Public()
  public integrationData?: string;
}
