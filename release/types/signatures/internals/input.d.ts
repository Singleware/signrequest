/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Input entity class.
 */
export declare class Input extends Class.Null {
    /**
     * Input type.
     */
    type?: Types.Input | null;
    /**
     * Page index.
     */
    pageIndex: number;
    /**
     * Text.
     */
    text?: string;
    /**
     * Checkbox value.
     */
    checkboxValue?: boolean | null;
    /**
     * Date value.
     */
    dateValue?: Date | null;
    /**
     * External Id.
     * Max 255 characters.
     */
    externalId?: string | null;
    /**
     * Placeholder uuid.
     * Max 36 characters.
     */
    placeholderUuid?: string | null;
}
