/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Required attachment, entity class.
 */
@RestDB.Schema.Entity('signatures/attachment')
@Class.Describe()
export class Attachment extends Class.Null {
  /**
   * Attachment name.
   * Max 255 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public name!: string;
}
