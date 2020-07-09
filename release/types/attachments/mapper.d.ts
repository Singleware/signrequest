/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Attachments mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Last response payload.
     */
    private lastPayload;
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the last request payload.
     */
    get payload(): Entity | undefined;
    /**
     * Create a new attachment request.
     * @param request Attachment creation request.
     * @returns Returns a promise to get the attachment Id.
     * @throws Throws an error when the server response is invalid.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Read the attachment that corresponds to the specified Id.
     * @param id Attachment Id.
     * @returns Returns a promise to get the attachment entity or undefined when the attachment wasn't found.
     */
    read(id: string): Promise<Entity | undefined>;
}
