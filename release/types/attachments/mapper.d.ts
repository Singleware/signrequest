import * as RestDB from '@singleware/restdb';
import * as Requests from './requests';
import * as Responses from './responses';
/**
 * Attachments mapper class.
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
     * Creates a new attachment request.
     * @param request Attachment creation request.
     * @returns Returns a promise to get the attachment entity or undefined when the operation has been failed.
     */
    create(request: Requests.Create): Promise<Responses.Entity | undefined>;
    /**
     * Loads the attachment that corresponds to the specified Id.
     * @param id Attachment Id.
     * @returns Returns a promise to get the attachment entity or undefined when the attachment wasn't found.
     */
    load(id: string): Promise<Responses.Entity | undefined>;
}
