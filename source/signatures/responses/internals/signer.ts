/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Commons from '../../commons';

import { Input } from './input';
import { Attachment } from './attachment';

/**
 * Signer entity class.
 */
@RestDB.Schema.Entity('signatures/signer')
@Class.Describe()
export class Signer extends Commons.Signer {
  /**
   * Display name.
   * Between 1 and 255 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('display_name')
  @RestDB.Schema.String(1, 255)
  @Class.Public()
  public displayName!: string;

  /**
   * Email viewed status.
   */
  @RestDB.Schema.Alias('email_viewed')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public emailViewed?: boolean;

  /**
   * Viewed status.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public viewed?: boolean;

  /**
   * Downloaded status.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public downloaded?: boolean;

  /**
   * Signed on.
   */
  @RestDB.Schema.Alias('signed_on')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public signedOn?: Date | null;

  /**
   * Emailed.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public emailed?: boolean;

  /**
   * Declined status.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public declined?: boolean;

  /**
   * Declined on.
   */
  @RestDB.Schema.Alias('declined_on')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public declinedOn?: Date | null;

  /**
   * Forwarded.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public forwarded?: boolean;

  /**
   * Forwarded on.
   */
  @RestDB.Schema.Alias('forwarded_on')
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public forwardedOn?: Date | null;

  /**
   * Forwarded to email.
   * Between 1 and 255 characters.
   */
  @RestDB.Schema.Alias('forwarded_to_email')
  @RestDB.Schema.String(1, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public forwardedToEmail?: string | null;

  /**
   * Forwarded reason.
   * Min 1 character.
   */
  @RestDB.Schema.Alias('forwarded_reason')
  @RestDB.Schema.String(1)
  @RestDB.Schema.Null()
  @Class.Public()
  public forwardedReason?: string | null;

  /**
   * Message.
   * Min 1 character.
   */
  @RestDB.Schema.String(1)
  @RestDB.Schema.Null()
  @Class.Public()
  public message?: string | null;

  /**
   * Signer inputs.
   */
  @RestDB.Schema.Array(Input)
  @Class.Public()
  public inputs?: Input[];

  /**
   * Embed URL.
   */
  @RestDB.Schema.Alias('embed_url')
  @RestDB.Schema.String(1)
  @RestDB.Schema.Null()
  @Class.Public()
  public embedUrl?: string | null;

  /**
   * Signer attachments.
   */
  @RestDB.Schema.Array(Attachment)
  @Class.Public()
  public attachments?: Attachment[];
}
