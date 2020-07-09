/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Input entity class.
 */
@RestDB.Schema.Entity('signatures/input')
@Class.Describe()
export class Input extends Class.Null {
  /**
   * Input type.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Input))
  @RestDB.Schema.Null()
  @Class.Public()
  public type?: Types.Input | null;

  /**
   * Page index.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('page_index')
  @RestDB.Schema.Integer()
  @Class.Public()
  public pageIndex!: number;

  /**
   * Text.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public text?: string;

  /**
   * Checkbox value.
   */
  @RestDB.Schema.Alias('checkbox_value')
  @RestDB.Schema.Boolean()
  @RestDB.Schema.Null()
  @Class.Public()
  public checkboxValue?: boolean | null;

  /**
   * Date value.
   */
  @RestDB.Schema.Alias('date_value')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public dateValue?: Date | null;

  /**
   * External Id.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('external_id')
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public externalId?: string | null;

  /**
   * Placeholder uuid.
   * Max 36 characters.
   */
  @RestDB.Schema.Alias('placeholder_uuid')
  @RestDB.Schema.String(0, 36)
  @RestDB.Schema.Null()
  @Class.Public()
  public placeholderUuid?: string | null;
}
