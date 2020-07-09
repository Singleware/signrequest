/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Signer } from './signer';

// Exported internals.
export { Input } from './input';
export { Signer } from './signer';
export { Requirement } from './requirement';
export { Attachment } from './attachment';

/**
 * Request internals.
 */
export namespace Request {
  /**
   * Light signer type.
   */
  export type LightSigner = Omit<
    Signer,
    | 'displayName'
    | 'emailViewed'
    | 'viewed'
    | 'signed'
    | 'downloaded'
    | 'signedOn'
    | 'emailed'
    | 'declined'
    | 'declinedOn'
    | 'forwarded'
    | 'forwardedOn'
    | 'forwardedToEmail'
    | 'forwardedReason'
    | 'message'
    | 'inputs'
    | 'embedUrl'
    | 'attachments'
  >;

  /**
   * Light signer fields.
   */
  export const LightSignerFields = [
    'email',
    'firstName',
    'lastName',
    'needsToSign',
    'approveOnly',
    'notifyOnly',
    'inPerson',
    'order',
    'language',
    'forceLanguage',
    'verifyPhoneNumber',
    'verifyBankAccount',
    'embedUrlUserId',
    'useStampForApproveOnly',
    'redirectUrl',
    'redirectUrlDeclined',
    'afterDocument',
    'integrations',
    'password'
  ];
}
