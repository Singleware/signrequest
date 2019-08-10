/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Prefill entity class.
 */
@RestDB.Schema.Entity('documents/prefill')
@Class.Describe()
export class Prefill extends Class.Null {
  /**
   * Prefill external Id.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('external_id')
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public externalId?: string | null;

  /**
   * Prefill text.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public text?: string | null;

  /**
   * Prefill checkbox value.
   */
  @RestDB.Schema.Alias('checkbox_value')
  @RestDB.Schema.Boolean()
  @RestDB.Schema.Null()
  @Class.Public()
  public checkboxValue?: boolean | null;

  /**
   * Prefill date value.
   */
  @RestDB.Schema.Alias('date_value')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public dateValue?: string | null;
}
