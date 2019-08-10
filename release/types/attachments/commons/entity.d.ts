/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Common attachment, entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Defaults to filename, including extension.
     * Max 255 characters.
     */
    name?: string | null;
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
