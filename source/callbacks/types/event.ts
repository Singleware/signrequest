/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Event types.
 */
export enum Event {
  ConvertError = 'convert_error',
  Converted = 'converted',
  SendingError = 'sending_error',
  Sent = 'sent',
  Declined = 'declined',
  Cancelled = 'cancelled',
  Expired = 'expired',
  Signed = 'signed',
  Viewed = 'viewed',
  Downloaded = 'downloaded',
  SignerSigned = 'signer_signed',
  SignerEmailBounced = 'signer_email_bounced',
  SignerViewedEmail = 'signer_viewed_email',
  SignerViewed = 'signer_viewed',
  SignerForwarded = 'signer_forwarded',
  SignerDownloaded = 'signer_downloaded',
  SignRequestReceived = 'signrequest_received'
}
