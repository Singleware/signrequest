/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Required from './required';
/**
 * Attachment entity class.
 */
export declare class Attachment extends Class.Null {
    /**
     * Attachment uuid.
     * Max 36 characters.
     */
    uuid: string;
    /**
     * Defaults to filename.
     * Between 1 and 255 characters.
     */
    name?: string;
    /**
     * File URL.
     */
    file?: string | null;
    /**
     * For attachment.
     */
    forAttachment?: Required.Attachment | null;
}
