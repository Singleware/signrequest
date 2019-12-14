/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Required attachment, entity class.
 */
@RestDB.Schema.Entity('signatures/requirement')
@Class.Describe()
export class Requirement extends Class.Null {
  /**
   * Requirement name.
   * Max 255 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public name!: string;

  /**
   * Requirement uuid.
   * Max 36 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 36)
  @Class.Public()
  public uuid!: string;
}
