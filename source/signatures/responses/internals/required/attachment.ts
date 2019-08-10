/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Commons from '../../../commons';

/**
 * Required attachment, entity class.
 */
@RestDB.Schema.Entity('signatures/required/attachments')
@Class.Describe()
export class Attachment extends Commons.Required.Attachment {
  /**
   * Attachment uuid.
   * Max 36 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 36)
  @Class.Public()
  public uuid!: string;
}
