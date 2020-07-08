/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Crypto from 'crypto';

import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Documents from '../documents';
import * as Signatures from '../signatures';

import * as Types from './types';

/**
 * Event entity class.
 */
@RestDB.Schema.Entity('events')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Event Id.
   * Max 36 characters.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 36)
  @Class.Public()
  public uuid!: string;

  /**
   * Status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Status))
  @Class.Public()
  public status!: Types.Status;

  /**
   * Team entity.
   */
  @RestDB.Schema.Object(Documents.Internals.Team)
  @Class.Public()
  public team!: Documents.Internals.Team;

  /**
   * Timestamp.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public timestamp!: Date;

  /**
   * Token name.
   */
  @RestDB.Schema.Alias('token_name')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public tokenName!: string;

  /**
   * Event type.
   */
  @RestDB.Schema.Alias('event_type')
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Event))
  @Class.Public()
  public eventType!: Types.Event;

  /**
   * Event time.
   */
  @RestDB.Schema.Alias('event_time')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public eventTime!: string;

  /**
   * Event hash.
   */
  @RestDB.Schema.Alias('event_hash')
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public eventHash!: string;

  /**
   * Document entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Documents.Entity, [
    'team',
    'uuid',
    'user',
    'fileAsPdf',
    'name',
    'externalId',
    'frontendId',
    'file',
    'fileFromUrl',
    'eventsCallbackUrl',
    'fileFromContent',
    'fileFromContentName',
    'template',
    'preFillTags',
    'integrations',
    'fileFromSF',
    'autoDeleteDays',
    'autoExpireDays',
    'pdf',
    'status',
    'signRequest',
    'apiUsed',
    'signingLog',
    'securityHash',
    'attachments',
    'autoDeleteAfter',
    'sandbox',
    'autoExpireAfter',
    'processing'
  ])
  @Class.Public()
  public document!: Omit<Documents.Entity, 'url'>;

  /**
   * Signer entity.
   */
  @RestDB.Schema.Object(Signatures.Responses.Internals.Signer)
  @RestDB.Schema.Null()
  @Class.Public()
  public signer?: Signatures.Responses.Internals.Signer | null;

  /**
   * Determines whether or not this event is valid according to the specified API token.
   * @param token Token.
   * @returns Returns true when the event is valid, false otherwise.
   */
  @Class.Public()
  public validate(token: string): boolean {
    const hmac = Crypto.createHmac('sha256', token);
    hmac.update(`${this.eventTime}${this.eventType}`);
    return hmac.digest('hex') === this.eventHash;
  }
}
