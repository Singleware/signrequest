import * as Commons from '../../commons';
import { Input } from './input';
import { Attachment } from './attachment';
/**
 * Signer entity class.
 */
export declare class Signer extends Commons.Signer {
    /**
     * Display name.
     * Between 1 and 255 characters.
     */
    displayName: string;
    /**
     * Email viewed status.
     */
    emailViewed?: boolean;
    /**
     * Viewed status.
     */
    viewed?: boolean;
    /**
     * Downloaded status.
     */
    downloaded?: boolean;
    /**
     * Signed on.
     */
    signedOn?: Date | null;
    /**
     * Emailed.
     */
    emailed?: boolean;
    /**
     * Declined status.
     */
    declined?: boolean;
    /**
     * Declined on.
     */
    declinedOn?: Date | null;
    /**
     * Forwarded.
     */
    forwarded?: boolean;
    /**
     * Forwarded on.
     */
    forwardedOn?: Date | null;
    /**
     * Forwarded to email.
     * Between 1 and 255 characters.
     */
    forwardedToEmail?: string | null;
    /**
     * Forwarded reason.
     * Min 1 character.
     */
    forwardedReason?: string | null;
    /**
     * Message.
     * Min 1 character.
     */
    message?: string | null;
    /**
     * Signer inputs.
     */
    inputs?: Input[];
    /**
     * Embed URL.
     */
    embedUrl?: string | null;
    /**
     * Signer attachments.
     */
    attachments?: Attachment[];
}
