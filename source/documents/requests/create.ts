/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Integrations from '../../integrations';
import * as Internals from '../internals';

/**
 * Create document, entity class.
 */
@RestDB.Schema.Entity('documents')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * User data.
   */
  @RestDB.Schema.Object(Internals.User, Internals.Request.LightUserFields)
  @Class.Public()
  public user?: Internals.Request.LightUser;

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
}
