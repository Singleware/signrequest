/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

/**
 * Client driver class.
 */
@Injection.Describe({ singleton: true, name: 'client' })
@Class.Describe()
export class Client extends RestDB.Driver {
  /**
   * Last payload data.
   */
  @Class.Private()
  private lastPayload?: RestDB.Entity;

  /**
   * Get the insert result from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the insert result.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Protected()
  protected getInsertResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R {
    this.lastPayload = response.payload;
    if (response.status.code !== 201) {
      throw new Error(`Unexpected insert(${response.input.method}) response status: ${response.status.code}`);
    } else if (!(this.lastPayload instanceof Object)) {
      throw new Error(`Response body must have an object.`);
    }
    return this.lastPayload.uuid;
  }

  /**
   * Get the found entity from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the entity or undefined when the entity wasn't found.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Protected()
  protected getFindByIdResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R | undefined {
    this.lastPayload = response.payload;
    if (response.status.code !== 200) {
      throw new Error(`Unexpected find(${response.input.method}) response status: ${response.status.code}`);
    } else if (!(this.lastPayload instanceof Object)) {
      throw new Error(`Response payload must be an object.`);
    }
    return <R>this.lastPayload;
  }

  /**
   * Get the updated entity status from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the updated entity status.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Protected()
  protected getUpdateByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean {
    this.lastPayload = response.payload!;
    if (response.status.code !== 200) {
      throw new Error(`Unexpected update(${response.input.method}) response status: ${response.status.code}`);
    } else if (!(this.lastPayload instanceof Object)) {
      throw new Error(`Response payload must be an object.`);
    }
    return true;
  }

  /**
   * Get the deleted entity status from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the deleted entity status.
   */
  @Class.Protected()
  protected getDeleteByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean {
    this.lastPayload = response.payload;
    return response.status.code === 204;
  }

  /**
   * Get the request query string based on the specified entity model, filters and fields.
   * @param model Entity model.
   * @param query Query filter.
   * @param fields Fields to select.
   * @returns Returns the instance itself.
   * @throws Throws an error when used with filters or selected fields. (Features doesn't supported)
   */
  @Class.Protected()
  protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, select?: string[]): string {
    if (query || (select && select.length > 0)) {
      throw new Error(`Query filter and Selected fields aren't supported.`);
    }
    return '/';
  }

  /**
   * Get the request Id based on the specified entity model and entity Id.
   * @param model Entity model.
   * @param id Entity Id.
   * @returns Returns the request Id.
   */
  @Class.Protected()
  protected getRequestId<I>(model: RestDB.Model, id: I): string {
    return `${super.getRequestId(model, id)}/`;
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.connect('https://signrequest.com/api/v1');
  }

  /**
   * Get the last request payload.
   */
  @Class.Public()
  public get payload(): RestDB.Entity | undefined {
    return this.lastPayload;
  }

  /**
   * Set the authorization token for all subsequent requests.
   * @param token Username.
   * @param password Password.
   * @returns Returns the instance itself.
   */
  @Class.Public()
  public setAuthorization(token: string): Client {
    this.setAuthHeader('Authorization', `Token ${token}`);
    return this;
  }
}
