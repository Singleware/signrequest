/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Attachments from '../attachments';
import * as Integrations from '../integrations';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Document entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Document URL.
     */
    url: string;
    /**
     * Team data.
     */
    team: Internals.Team;
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
     * Temporary URL to original file as PDF, expires in five minutes.
     */
    fileAsPdf?: string | null;
    /**
     * Defaults to filename, including extension.
     */
    name?: string | null;
    /**
     * Id used to reference document in external system.
     */
    externalId?: string | null;
    /**
     * Shared secret used in conjunction with SignRequest-js client to grant user access to a document
     * that's not a member of the document's team.
     */
    frontendId?: string | null;
    /**
     * Temporary URL to original file, expires in five minutes.
     */
    file?: string | null;
    /**
     * Publicly accessible URL of document to be downloaded by SignRequest.
     */
    fileFromUrl?: string | null;
    /**
     * URL at which to receive event callbacks for this document.
     */
    eventsCallbackUrl?: string | null;
    /**
     * Base64 encoded document content.
     */
    fileFromContent?: string | null;
    /**
     * Filename, including extension.
     * Required when using file_from_content.
     */
    fileFromContentName?: string | null;
    /**
     * Template URL.
     */
    template?: string | null;
    /**
     * Pre-fill signer input data.
     * @see https://signrequest.com/api/v1/docs/#section/Preparing-a-document/Prefill-tags-templates
     */
    preFillTags?: Internals.PreFill[];
    /**
     * Integrations.
     */
    integrations?: Integrations.Entity[];
    /**
     * File from SF.
     */
    fileFromSF?: Internals.SF | null;
    /**
     * Number of days after which a finished document (signed/cancelled/declined) will be automatically deleted.
     * Between 1 and 730 days.
     */
    autoDeleteDays?: number | null;
    /**
     * Number of days after which a non finished document will be automatically expired.
     * Between 1 and 730 days.
     */
    autoExpireDays?: number | null;
    /**
     * Temporary URL to signed document as PDF, expires in five minutes.
     */
    pdf?: string | null;
    /**
     * Document status.
     */
    status: Types.Status;
    /**
     * Sign request object.
     */
    signRequest?: Internals.LightSignature | null;
    /**
     * Indicates whether document was created using the API.
     */
    apiUsed: boolean;
    /**
     * Document signing log.
     */
    signingLog?: Internals.SigningLog | null;
    /**
     * SHA256 hash of PDF contents.
     */
    securityHash?: string | null;
    /**
     * Document attachments.
     */
    attachments?: Attachments.Entity[] | null;
    /**
     * Date and time calculated using auto_delete_days after which a finished document (signed/cancelled/declined)
     * will be automatically deleted.
     */
    autoDeleteAfter?: Date | null;
    /**
     * Indicates whether document was created as part of a sandbox team.
     */
    sandbox: boolean;
    /**
     * Date and time calculated using auto_expire_days after which a non finished document will be automatically expired.
     */
    autoExpireAfter?: Date | null;
    /**
     * Indicates whether a change to the document is processing and the PDF may be out of date.
     * It is recommended to wait until processing has finished before downloading the PDF.
     * Webhooks are not sent until processing has been completed.
     */
    processing: boolean;
}
