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
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Creates a new attachment request.
     * @param request Attachment creation request.
     * @returns Returns a promise to get the attachment entity or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<Entity | undefined>;
    /**
     * Read the attachment that corresponds to the specified Id.
     * @param id Attachment Id.
     * @returns Returns a promise to get the attachment entity or undefined when the attachment wasn't found.
     */
    read(id: string): Promise<Entity | undefined>;
}
