/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Signer } from './signer';
export { Input } from './input';
export { Signer } from './signer';
export { Requirement } from './requirement';
export { Attachment } from './attachment';
/**
 * Request internals.
 */
export declare namespace Request {
    /**
     * Light signer type.
     */
    type LightSigner = Omit<Signer, 'displayName' | 'emailViewed' | 'viewed' | 'signed' | 'downloaded' | 'signedOn' | 'emailed' | 'declined' | 'declinedOn' | 'forwarded' | 'forwardedOn' | 'forwardedToEmail' | 'forwardedReason' | 'message' | 'inputs' | 'embedUrl' | 'attachments'>;
    /**
     * Light signer fields.
     */
    const LightSignerFields: string[];
}
