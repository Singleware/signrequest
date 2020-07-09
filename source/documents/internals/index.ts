/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Signatures from '../../signatures';

import { User } from './user';

// Exported internals.
export { Team } from './team';
export { SigningLog } from './signinglog';
export { PreFill } from './prefill';
export { User } from './user';
export { SF } from './sf';

/**
 * Light signature.
 */
export type LightSignature = Omit<Signatures.Entity, 'document'>;

/**
 * Light signature fields.
 */
export const LightSignatureFields = [
  'fromEmail',
  'fromEmailName',
  'isBeingPrepared',
  'prepareUrl',
  'redirectUrl',
  'redirectUrlDeclined',
  'requiredAttachments',
  'disableAttachments',
  'disableTextSignatures',
  'disableText',
  'disableDate',
  'disableEmails',
  'disableUploadSignatures',
  'disableBlockchainProof',
  'textMessageVerificationLocked',
  'subject',
  'message',
  'who',
  'sendReminders',
  'signers',
  'uuid'
];

/**
 * Request internals.
 */
export namespace Request {
  /**
   * Light user type.
   */
  export type LightUser = Omit<User, 'displayName'>;

  /**
   * Light user fields.
   */
  export const LightUserFields = ['email', 'firstName', 'lastName'];
}
