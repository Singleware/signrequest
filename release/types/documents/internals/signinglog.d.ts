/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Signing log entity class.
 */
export declare class SigningLog extends Class.Null {
    /**
     * Temporary URL to signing log, expires in five minutes
     */
    pdf?: string | null;
    /**
     * SHA256 hash of PDF contents.
     */
    securityHash?: string | null;
}
