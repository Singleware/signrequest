/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../../types';
import * as Internals from './internals';

/**
 * Document entity class.
 */
@RestDB.Schema.Entity('documents')
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
   * User data.
   */
  @RestDB.Schema.Object(Internals.User)
  @RestDB.Schema.Null()
  @Class.Public()
  public user?: Internals.User | null;

  /**
   * Temporary URL to original file, expires in five minutes.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public file?: string | null;

  /**
   * Document URL.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public url!: string;

  /**
   * Team data.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Team)
  @Class.Public()
  public team!: Internals.Team;

  /**
   * Temporary URL to original file as PDF, expires in five minutes.
   */
  @RestDB.Schema.Alias('file_as_pdf')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public fileAsPdf?: string | null;

  /**
   * Temporary URL to signed document as PDF, expires in five minutes.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public pdf?: string | null;

  /**
   * SHA256 hash of PDF contents.
   */
  @RestDB.Schema.Alias('security_hash')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public securityHash?: string | null;

  /**
   * Document status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(...Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Document attachments.
   */
  @RestDB.Schema.Array(Internals.Attachment)
  @RestDB.Schema.Null()
  @Class.Public()
  public attachments?: Internals.Attachment[] | null;

  /**
   * Indicates whether document was created using the API.
   */
  @RestDB.Schema.Alias('api_used')
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public apiUsed!: boolean;

  /**
   * Indicates whether document was created as part of a sandbox team.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public sandbox!: boolean;

  /**
   * Date and time calculated using auto_delete_days after which a finished document (signed/cancelled/declined)
   * will be automatically deleted.
   */
  @RestDB.Schema.Alias('auto_delete_after')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public autoDeleteAfter?: Date | null;

  /**
   * Date and time calculated using auto_expire_days after which a non finished document will be automatically expired.
   */
  @RestDB.Schema.Alias('auto_expire_after')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public autoExpireAfter?: Date | null;
}
