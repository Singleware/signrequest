/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Pre-fill entity class.
 */
export declare class PreFill extends Class.Null {
    /**
     * Pre-fill external Id.
     * Max 255 characters.
     */
    externalId?: string | null;
    /**
     * Pre-fill text.
     */
    text?: string | null;
    /**
     * Pre-fill checkbox value.
     */
    checkboxValue?: boolean | null;
    /**
     * Pre-fill date value.
     */
    dateValue?: string | null;
}
