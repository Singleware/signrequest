import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import * as Responses from './responses';
/**
 * Documents mapper class.
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
     * Creates a new document request.
     * @param request Document creation request.
     * @returns Returns a promise to get the document entity or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<Responses.Entity | undefined>;
    /**
     * Loads the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get the document entity or undefined when the document wasn't found.
     */
    load(id: string): Promise<Responses.Entity | undefined>;
    /**
     * Removes the document that corresponds to the specified document Id.
     * @param id Document Id.
     * @returns Returns a promise to get true when the removal was successful, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
