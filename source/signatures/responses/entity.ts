/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Internals from './internals';

/**
 * Signature entity class.
 */
@RestDB.Schema.Entity('signrequests')
@Class.Describe()
export class Entity extends Internals.Entity {
  /**
   * Document Id.
   * Max 36 characters.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 36)
  @Class.Public()
  public uuid!: string;

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

  /**
   * URL to prepare the document.
   * Min 1 character.
   */
  @RestDB.Schema.Alias('prepare_url')
  @RestDB.Schema.String(1)
  @RestDB.Schema.Null()
  @Class.Public()
  public prepareUrl?: string | null;

  /**
   * Sign request URL.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public url?: string | null;
}
