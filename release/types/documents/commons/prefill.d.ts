/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Prefill entity class.
 */
export declare class Prefill extends Class.Null {
    /**
     * Prefill external Id.
     * Max 255 characters.
     */
    externalId?: string | null;
    /**
     * Prefill text.
     */
    text?: string | null;
    /**
     * Prefill checkbox value.
     */
    checkboxValue?: boolean | null;
    /**
     * Prefill date value.
     */
    dateValue?: string | null;
}
