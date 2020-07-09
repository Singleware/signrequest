/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Signatures from '../../signatures';
import { User } from './user';
export { Team } from './team';
export { SigningLog } from './signinglog';
export { PreFill } from './prefill';
export { User } from './user';
export { SF } from './sf';
/**
 * Light signature.
 */
export declare type LightSignature = Omit<Signatures.Entity, 'document'>;
/**
 * Light signature fields.
 */
export declare const LightSignatureFields: string[];
/**
 * Request internals.
 */
export declare namespace Request {
    /**
     * Light user type.
     */
    type LightUser = Omit<User, 'displayName'>;
    /**
     * Light user fields.
     */
    const LightUserFields: string[];
}
