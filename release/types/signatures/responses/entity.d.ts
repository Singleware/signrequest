import * as Internals from './internals';
/**
 * Signature entity class.
 */
export declare class Entity extends Internals.Entity {
    /**
     * Document Id.
     * Max 36 characters.
     */
    uuid: string;
    /**
     * Attachments that signers are required to upload.
     */
    requiredAttachments?: Internals.Required.Attachment[];
    /**
     * Document signers.
     */
    signers: Internals.Signer[];
    /**
     * URL to prepare the document.
     * Min 1 character.
     */
    prepareUrl?: string | null;
    /**
     * Sign request URL.
     */
    url?: string | null;
}
