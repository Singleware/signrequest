import * as RestDB from '@singleware/restdb';
/**
 * Client driver class.
 */
export declare class Client extends RestDB.Driver {
    /**
     * Last payload data.
     */
    private lastPayload?;
    /**
     * Get the insert result from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the insert result.
     * @throws Throws an error when the server response is invalid.
     */
    protected getInsertResponse<T>(model: RestDB.Model, response: RestDB.Responses.Output): T;
    /**
     * Get the found entity from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the entity or undefined when the entity wasn't found.
     * @throws Throws an error when the server response is invalid.
     */
    protected getFindByIdResponse<T>(model: RestDB.Model, response: RestDB.Responses.Output): T | undefined;
    /**
     * Get the updated entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the updated entity status.
     * @throws Throws an error when the server response is invalid.
     */
    protected getUpdateByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean;
    /**
     * Get the deleted entity status from the given response entity.
     * @param model Entity model.
     * @param response Response entity.
     * @returns Returns the deleted entity status.
     */
    protected getDeleteByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean;
    /**
     * Get the request query string based on the specified entity model, filters and fields.
     * @param model Entity model.
     * @param query Query filter.
     * @param fields Fields to select.
     * @returns Returns the instance itself.
     * @throws Throws an error when used with filters or selected fields. (Features doesn't supported)
     */
    protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, select?: string[]): string;
    /**
     * Get the request Id based on the specified entity model and entity Id.
     * @param model Entity model.
     * @param id Entity Id.
     * @returns Returns the request Id.
     */
    protected getRequestId(model: RestDB.Model, id: string): string;
    /**
     * Default constructor.
     */
    constructor();
    /**
     * Get the last request payload.
     */
    get payload(): RestDB.Entity | undefined;
    /**
     * Set the authorization token for all subsequent requests.
     * @param token Username.
     * @param password Password.
     * @returns Returns the instance itself.
     */
    setAuthorization(token: string): Client;
}
