/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Types } from './types';
/**
 * Integration entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Integration type.
     */
    integration?: Types | null;
    /**
     * Integration data.
     */
    integrationData?: string;
}
