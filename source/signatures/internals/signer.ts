/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Integrations from '../../integrations';
import * as Types from '../types';

import { Attachment } from './attachment';
import { Input } from './input';

/**
 * Signer entity class.
 */
@RestDB.Schema.Entity('signatures/signer')
@Class.Describe()
export class Signer extends Class.Null {
  /**
   * Signer email.
   * Max 255 characters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public email!: string;

  /**
   * Display name.
   * Min 1 character.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('display_name')
  @RestDB.Schema.String()
  @Class.Public()
  public displayName!: string;

  /**
   * First name.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('first_name')
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public firstName?: string;

  /**
   * Last name.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('last_name')
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public lastName?: string;

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
   * Signed status.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public signed?: boolean;

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
   * Needs to sign.
   * Default is true.
   */
  @RestDB.Schema.Alias('needs_to_sign')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public needsToSign?: boolean;

  /**
   * Approve only.
   */
  @RestDB.Schema.Alias('approve_only')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public approveOnly?: boolean;

  /**
   * Notify only.
   */
  @RestDB.Schema.Alias('notify_only')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public notifyOnly?: boolean;

  /**
   * In person.
   */
  @RestDB.Schema.Alias('in_person')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public inPerson?: boolean;

  /**
   * Signing order.
   */
  @RestDB.Schema.Integer(0, 2147483647)
  @Class.Public()
  public order?: number;

  /**
   * Language.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Language))
  @RestDB.Schema.Null()
  @Class.Public()
  public language?: Types.Language | null;

  /**
   * Force language.
   */
  @RestDB.Schema.Alias('force_language')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public forceLanguage?: boolean;

  /**
   * Emailed.
   */
  @RestDB.Schema.Boolean()
  @Class.Public()
  public emailed?: boolean;

  /**
   * Verify phone number.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('verify_phone_number')
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public verifyPhoneNumber?: string | null;

  /**
   * Verify bank account.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('verify_bank_account')
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public verifyBankAccount?: string | null;

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
   * Embed URL user Id.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('embed_url_user_id')
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public embedUrlUserId?: string | null;

  /**
   * Signer inputs.
   */
  @RestDB.Schema.Array(Input)
  @Class.Public()
  public inputs?: Input[];

  /**
   * Place an approval stamp on a document when a signer approves a document.
   */
  @RestDB.Schema.Alias('use_stamp_for_approve_only')
  @RestDB.Schema.Boolean()
  @Class.Public()
  public useStampForApproveOnly?: boolean;

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

  /**
   * Redirect URL.
   * Between 1 and 2100 characters.
   */
  @RestDB.Schema.Alias('redirect_url')
  @RestDB.Schema.String(1, 2100)
  @RestDB.Schema.Null()
  @Class.Public()
  public redirectUrl?: string | null;

  /**
   * Redirect URL declined.
   * Between 1 and 2100 characters.
   */
  @RestDB.Schema.Alias('redirect_url')
  @RestDB.Schema.String(1, 2100)
  @RestDB.Schema.Null()
  @Class.Public()
  public redirectUrlDeclined?: string | null;

  /**
   * After document.
   */
  @RestDB.Schema.Alias('after_document')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public afterDocument?: string | null;

  /**
   * Integrations.
   */
  @RestDB.Schema.Array(Integrations.Entity)
  @Class.Public()
  public integrations?: Integrations.Entity[];

  /**
   * Require the signer to enter this password before signing a document.
   * This field is write only.
   * Min 1 character.
   */
  @RestDB.Schema.String(1)
  @RestDB.Schema.Null()
  @Class.Public()
  public password?: string | null;
}
