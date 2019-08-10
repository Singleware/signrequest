/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../../types';
import * as Commons from '../../commons';
/**
 * Common signer, entity class.
 */
export declare class Signer extends Class.Null {
    /**
     * Signer email.
     * Max 255 characters.
     */
    email: string;
    /**
     * First name.
     * Max 255 characters.
     */
    firstName?: string;
    /**
     * Last name.
     * Max 255 characters.
     */
    lastName?: string;
    /**
     * Needs to sign.
     * Default is true.
     */
    needsToSign?: boolean;
    /**
     * Approve only.
     */
    approveOnly?: boolean;
    /**
     * Notify only.
     */
    notifyOnly?: boolean;
    /**
     * In person.
     */
    inPerson?: boolean;
    /**
     * Signing order.
     */
    order?: number;
    /**
     * Language.
     */
    language?: Types.Language | null;
    /**
     * Force language.
     */
    forceLanguage?: boolean;
    /**
     * Verify phone number.
     * Max 255 characters.
     */
    verifyPhoneNumber?: string | null;
    /**
     * Verify bank account.
     * Max 255 characters.
     */
    verifyBankAccount?: string | null;
    /**
     * Embed URL user Id.
     * Max 255 characters.
     */
    embedUrlUerId?: string | null;
    /**
     * Place an approval stamp on a document when a signer approves a document.
     */
    useStampForApproveOnly?: boolean;
    /**
     * Redirect URL.
     * Between 1 and 2100 characters.
     */
    redirectUrl?: string | null;
    /**
     * After document.
     */
    afterDocument?: string | null;
    /**
     * Integrations.
     */
    integrations?: Commons.Integration[];
    /**
     * Access password.
     * Min 1 character.
     */
    password?: string | null;
}
