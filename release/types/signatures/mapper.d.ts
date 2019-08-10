import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import * as Responses from './responses';
/**
 * Signatures mapper class.
 */
export declare class Mapper extends RestDB.Mapper<Responses.Entity> {
    /**
     * Client instance.
     */
    private client;
    /**
     * Default constructor.
     * @param dependencies Mapper dependencies.
     */
    constructor(dependencies: any);
    /**
     * Creates a new signature request.
     * @param request Signature creation request.
     * @returns Returns a promise to get the signature entity or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<Responses.Entity | undefined>;
    /**
     * Loads the signature that corresponds to the specified Id.
     * @param id Signature Id.
     * @returns Returns a promise to get the signature entity or undefined when the signature wasn't found.
     */
    load(id: string): Promise<Responses.Entity | undefined>;
    /**
     * Cancels the signature that corresponds to the specified Id.
     * @param id Signature Id.
     * @returns Returns a promise to get true when the cancellation was successful, false otherwise.
     */
    cancel(id: string): Promise<boolean>;
    /**
     * Resends the signature that corresponds to the specified Id.
     * @param id Signature Id.
     * @returns Returns a promise to get true when the cancellation was successful, false otherwise.
     */
    resend(id: string): Promise<boolean>;
}
