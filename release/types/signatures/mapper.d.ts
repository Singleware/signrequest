/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Signatures mapper class.
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
     * Creates a new signature request.
     * @param request Signature creation request.
     * @returns Returns a promise to get the signature Id.
     * @throws Throws an error when the server response is invalid.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Read the signature that corresponds to the specified Id.
     * @param id Signature Id.
     * @returns Returns a promise to get the signature entity or undefined when it wasn't found.
     */
    read(id: string): Promise<Entity | undefined>;
    /**
     * Cancel the signature that corresponds to the specified Id.
     * @param id Signature Id.
     * @returns Returns a promise to get true when the cancellation was successful, false otherwise.
     */
    cancel(id: string): Promise<boolean>;
    /**
     * Resend the signature that corresponds to the specified Id.
     * @param id Signature Id.
     * @returns Returns a promise to get true when the cancellation was successful, false otherwise.
     */
    resend(id: string): Promise<boolean>;
}
