/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Attachment entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Attachment URL
     */
    url?: string;
    /**
     * Attachment Id.
     * Max 36 characters.
     */
    uuid: string;
    /**
     * Defaults to filename, including extension.
     * Max 255 characters.
     */
    name?: string | null;
    /**
     * Temporary URL to document attachment, expires in five minutes.
     */
    file?: string | null;
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
     * Publicly accessible URL of document to be downloaded by SignRequest.
     * Max 2100 characters.
     */
    fileFromUrl?: string | null;
    /**
     * Document URL.
     */
    document: string;
}
