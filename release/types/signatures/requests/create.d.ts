import * as Internals from './internals';
/**
 * Create signature, entity class.
 */
export declare class Create extends Internals.Entity {
    /**
     * Attachments that signers are required to upload.
     */
    requiredAttachments?: Internals.Required.Attachment[];
    /**
     * Document signers.
     */
    signers: Internals.Signer[];
}
