import * as Commons from '../commons';
/**
 * Attachment entity class.
 */
export declare class Entity extends Commons.Entity {
    /**
     * Attachment Id.
     * Max 36 characters.
     */
    uuid: string;
    /**
     * Attachment URL
     */
    url?: string;
    /**
     * Temporary URL to document attachment, expires in five minutes.
     */
    file?: string | null;
}
