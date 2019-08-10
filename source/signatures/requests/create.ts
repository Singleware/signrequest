/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Internals from './internals';

/**
 * Create signature, entity class.
 */
@RestDB.Schema.Entity('signrequests')
@Class.Describe()
export class Create extends Internals.Entity {
  /**
   * Attachments that signers are required to upload.
   */
  @RestDB.Schema.Alias('required_attachments')
  @RestDB.Schema.Array(Internals.Required.Attachment)
  @Class.Public()
  public requiredAttachments?: Internals.Required.Attachment[];

  /**
   * Document signers.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Signer)
  @Class.Public()
  public signers!: Internals.Signer[];
}
