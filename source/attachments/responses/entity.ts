/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Commons from '../commons';

/**
 * Attachment entity class.
 */
@RestDB.Schema.Entity('document-attachments')
@Class.Describe()
export class Entity extends Commons.Entity {
  /**
   * Attachment Id.
   * Max 36 characters.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 36)
  @Class.Public()
  public uuid!: string;

  /**
   * Attachment URL
   */
  @RestDB.Schema.String()
  @Class.Public()
  public url?: string;

  /**
   * Temporary URL to document attachment, expires in five minutes.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public file?: string | null;
}
