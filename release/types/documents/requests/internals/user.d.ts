/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
/**
 * User entity class.
 */
export declare class User extends Class.Null {
    /**
     * User email.
     * Between 1 and 254 characters.
     */
    email: string;
    /**
     * User first name.
     * Max 255 characters.
     */
    firstName?: string;
    /**
     * User last name.
     * Max 255 characters.
     */
    lastName?: string;
}
