/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * Required attachment, entity class.
 */
export declare class Requirement extends Class.Null {
    /**
     * Requirement name.
     * Max 255 characters.
     */
    name: string;
    /**
     * Requirement uuid.
     * Max 36 characters.
     */
    uuid: string;
}
