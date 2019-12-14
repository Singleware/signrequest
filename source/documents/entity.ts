/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Attachments from '../attachments';
import * as Signatures from '../signatures';
import * as Integrations from '../integrations';

import * as Types from './types';
import * as Internals from './internals';
import * as Responses from './responses';

/**
 * Document entity class.
 */
@RestDB.Schema.Entity('documents')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Document URL.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public url?: string;

  /**
   * Team data.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Team)
  @Class.Public()
  public team!: Internals.Team;

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
  @RestDB.Schema.Object(Responses.Internals.User)
  @RestDB.Schema.Null()
  @Class.Public()
  public user?: Responses.Internals.User | null;

  /**
   * Temporary URL to original file as PDF, expires in five minutes.
   */
  @RestDB.Schema.Alias('file_as_pdf')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public fileAsPdf?: string | null;

  /**
   * Defaults to filename, including extension.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public name?: string | null;

  /**
   * Id used to reference document in external system.
   */
  @RestDB.Schema.Alias('external_id')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public externalId?: string | null;

  /**
   * Shared secret used in conjunction with SignRequest-js client to grant user access to a document
   * that's not a member of the document's team.
   */
  @RestDB.Schema.Alias('frontend_id')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public frontendId?: string | null;

  /**
   * Temporary URL to original file, expires in five minutes.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public file?: string | null;

  /**
   * Publicly accessible URL of document to be downloaded by SignRequest.
   */
  @RestDB.Schema.Alias('file_from_url')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public fileFromUrl?: string | null;

  /**
   * URL at which to receive event callbacks for this document.
   */
  @RestDB.Schema.Alias('events_callback_url')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public eventsCallbackUrl?: string | null;

  /**
   * Base64 encoded document content.
   */
  @RestDB.Schema.Alias('file_from_content')
  @RestDB.Schema.Base64()
  @RestDB.Schema.Null()
  @Class.Public()
  public fileFromContent?: string | null;

  /**
   * Filename, including extension.
   * Required when using file_from_content.
   */
  @RestDB.Schema.Alias('file_from_content_name')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public fileFromContentName?: string | null;

  /**
   * Template URL.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public template?: string | null;

  /**
   * Pre-fill signer input data.
   * @see https://signrequest.com/api/v1/docs/#section/Preparing-a-document/Prefill-tags-templates
   */
  @RestDB.Schema.Alias('prefill_tags')
  @RestDB.Schema.Array(Internals.PreFill)
  @Class.Public()
  public preFillTags?: Internals.PreFill[];

  /**
   * Integrations.
   */
  @RestDB.Schema.Array(Integrations.Entity)
  @Class.Public()
  public integrations?: Integrations.Entity[];

  /**
   * File from SF.
   */
  @RestDB.Schema.Alias('file_from_sf')
  @RestDB.Schema.Object(Internals.SF)
  @RestDB.Schema.Null()
  @Class.Public()
  public fileFromSF?: Internals.SF | null;

  /**
   * Number of days after which a finished document (signed/cancelled/declined) will be automatically deleted.
   * Between 1 and 730 days.
   */
  @RestDB.Schema.Alias('auto_delete_days')
  @RestDB.Schema.Integer(1, 730)
  @RestDB.Schema.Null()
  @Class.Public()
  public autoDeleteDays?: number | null;

  /**
   * Number of days after which a non finished document will be automatically expired.
   * Between 1 and 730 days.
   */
  @RestDB.Schema.Alias('auto_expire_days')
  @RestDB.Schema.Integer(1, 730)
  @RestDB.Schema.Null()
  @Class.Public()
  public autoExpireDays?: number | null;

  /**
   * Temporary URL to signed document as PDF, expires in five minutes.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public pdf?: string | null;

  /**
   * Document status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Sign request object.
   */
  @RestDB.Schema.Alias('signrequest')
  @RestDB.Schema.Object(Signatures.Entity)
  @RestDB.Schema.Null()
  @Class.Public()
  public signRequest?: Signatures.Entity | null;

  /**
   * Indicates whether document was created using the API.
   */
  @RestDB.Schema.Alias('api_used')
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public apiUsed!: boolean;

  /**
   * Document signing log.
   */
  @RestDB.Schema.Alias('signing_log')
  @RestDB.Schema.Array(Internals.Signing)
  @RestDB.Schema.Null()
  @Class.Public()
  public signingLog?: Internals.Signing[] | null;

  /**
   * SHA256 hash of PDF contents.
   */
  @RestDB.Schema.Alias('security_hash')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public securityHash?: string | null;

  /**
   * Document attachments.
   */
  @RestDB.Schema.Array(Attachments.Entity)
  @RestDB.Schema.Null()
  @Class.Public()
  public attachments?: Attachments.Entity[] | null;

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
   * Indicates whether document was created as part of a sandbox team.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public sandbox!: boolean;

  /**
   * Date and time calculated using auto_expire_days after which a non finished document will be automatically expired.
   */
  @RestDB.Schema.Alias('auto_expire_after')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public autoExpireAfter?: Date | null;

  /**
   * Indicates whether a change to the document is processing and the PDF may be out of date.
   * It is recommended to wait until processing has finished before downloading the PDF.
   * Webhooks are not sent until processing has been completed.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public processing!: boolean;
}
