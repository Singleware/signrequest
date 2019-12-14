/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Documents mapper class.
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
     * Creates a new document request.
     * @param request Document creation request.
     * @returns Returns a promise to get the document entity or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<Entity | undefined>;
    /**
     * Read the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get the document entity or undefined when the document wasn't found.
     */
    read(id: string): Promise<Entity | undefined>;
    /**
     * Delete the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get true when the removal was successful, false otherwise.
     */
    delete(id: string): Promise<boolean>;
}
