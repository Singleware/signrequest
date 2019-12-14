/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Requirement } from './requirement';

/**
 * Attachment entity class.
 */
@RestDB.Schema.Entity('signatures/attachment')
@Class.Describe()
export class Attachment extends Class.Null {
  /**
   * Attachment uuid.
   * Max 36 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 36)
  @Class.Public()
  public uuid!: string;

  /**
   * Defaults to filename.
   * Between 1 and 255 characters.
   */
  @RestDB.Schema.String(1, 255)
  @Class.Public()
  public name?: string;

  /**
   * File URL.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public file?: string | null;

  /**
   * For attachment.
   */
  @RestDB.Schema.Alias('for_attachment')
  @RestDB.Schema.Object(Requirement)
  @RestDB.Schema.Null()
  @Class.Public()
  public forAttachment?: Requirement | null;
}
