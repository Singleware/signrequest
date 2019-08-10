/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * SF entity class.
 */
@RestDB.Schema.Entity('documents/sf')
@Class.Describe()
export class SF extends Class.Null {
  /**
   * SF object type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('object_type')
  @RestDB.Schema.String()
  @Class.Public()
  public objectType!: string;

  /**
   * SF object id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('object_id')
  @RestDB.Schema.String()
  @Class.Public()
  public objectId!: string;

  /**
   * SF uid.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public uid!: string;
}
