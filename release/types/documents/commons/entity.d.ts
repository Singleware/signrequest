/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Commons from '../../commons';
import { Prefill } from './prefill';
import { SF } from './sf';
/**
 * Document entity class.
 */
export declare class Entity extends Class.Null {
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
     * Prefill signer input data.
     * @see https://signrequest.com/api/v1/docs/#section/Preparing-a-document/Prefill-tags-templates
     */
    prefillTags?: Prefill[];
    /**
     * Integrations.
     */
    integrations?: Commons.Integration[];
    /**
     * File from SF.
     */
    fileFromSF?: SF | null;
    /**
     * Number of days after which a finished document (signed/cancelled/declined) will be automatically deleted.
     */
    autoDeleteDays?: number | null;
    /**
     * Number of days after which a non finished document will be automatically expired.
     */
    autoExpireDays?: number | null;
}
