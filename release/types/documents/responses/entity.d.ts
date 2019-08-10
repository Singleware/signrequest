import * as Types from '../../types';
import * as Internals from './internals';
/**
 * Document entity class.
 */
export declare class Entity extends Internals.Entity {
    /**
     * Document Id.
     * Max 36 characters.
     */
    uuid: string;
    /**
     * User data.
     */
    user?: Internals.User | null;
    /**
     * Temporary URL to original file, expires in five minutes.
     */
    file?: string | null;
    /**
     * Document URL.
     */
    url: string;
    /**
     * Team data.
     */
    team: Internals.Team;
    /**
     * Temporary URL to original file as PDF, expires in five minutes.
     */
    fileAsPdf?: string | null;
    /**
     * Temporary URL to signed document as PDF, expires in five minutes.
     */
    pdf?: string | null;
    /**
     * SHA256 hash of PDF contents.
     */
    securityHash?: string | null;
    /**
     * Document status.
     */
    status: Types.Status;
    /**
     * Document attachments.
     */
    attachments?: Internals.Attachment[] | null;
    /**
     * Indicates whether document was created using the API.
     */
    apiUsed: boolean;
    /**
     * Indicates whether document was created as part of a sandbox team.
     */
    sandbox: boolean;
    /**
     * Date and time calculated using auto_delete_days after which a finished document (signed/cancelled/declined)
     * will be automatically deleted.
     */
    autoDeleteAfter?: Date | null;
    /**
     * Date and time calculated using auto_expire_days after which a non finished document will be automatically expired.
     */
    autoExpireAfter?: Date | null;
}
