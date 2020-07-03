/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as SignatureRequests from './signatures/requests';

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
  private payloadData?: RestDB.Entity;

  /**
   * Gets the request Id based on the specified entity model and entity Id.
   * @param model Entity model.
   * @param id Entity Id.
   * @returns Returns the request Id.
   */
  @Class.Protected()
  protected getRequestId(model: RestDB.Model, id: string): string {
    return `${super.getRequestId(model, id)}/`;
  }

  /**
   * Gets the request query string based on the specified entity model, fields and query filter.
   * @param model Entity model.
   * @param query Query filter.
   * @param select Optional fields to select.
   * @returns Returns the parsed query string.
   * @throws Throws an error when used with filters or select fields. (Feature not supported)
   */
  @Class.Protected()
  protected getRequestQuery(model: RestDB.Model, query?: RestDB.Query, select?: string[]): string {
    if (query || (select && select.length > 0)) {
      throw new Error(`Query filter and Selected fields aren't supported.`);
    }
    return '/';
  }

  /**
   * Gets the request method based on the specified entity model.
   * @param model Entity model.
   * @param method Request method.
   * @returns Returns the request method.
   */
  @Class.Protected()
  protected getRequestMethod(model: RestDB.Model, method: RestDB.Method): RestDB.Method {
    switch (model) {
      case SignatureRequests.Cancel:
      case SignatureRequests.Resend:
        return RestDB.Method.POST;
      default:
        return method;
    }
  }

  /**
   * Gets the result Id from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the result Id or undefined when the result Id was not found.
   * @throws Throws an error when the response body doesn't contains the insert results.
   */
  @Class.Protected()
  protected getInsertResponse<R>(model: RestDB.Model, response: RestDB.Responses.Output): R | Promise<R> {
    this.payloadData = void 0;
    if (response.status.code !== 201) {
      throw new Error(`Unexpected response status: ${response.status.code}`);
    } else if (!((this.payloadData = response.payload) instanceof Object)) {
      throw new Error(`Response body must have an object.`);
    } else {
      return <R>this.payloadData.uuid;
    }
  }

  /**
   * Gets the updated entity status from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the updated entity status or a promise to get it.
   */
  @Class.Protected()
  protected getUpdateByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean {
    this.payloadData = void 0;
    if (response.status.code === 200) {
      if (!(response.payload instanceof Object)) {
        throw new Error(`The response body must be an object containing the response results.`);
      }
      this.payloadData = <RestDB.Entity>response.payload;
      switch (model) {
        case SignatureRequests.Cancel:
          return this.payloadData.cancelled === true;
        case SignatureRequests.Resend:
          return this.payloadData.detail === 'OK';
        default:
          throw new Error(`Unsupported request entity.`);
      }
    }
    return false;
  }

  /**
   * Gets the found entity from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the entity, a promise to get it or undefined when the entity was not found.
   */
  @Class.Protected()
  protected getFindByIdResponse<T extends RestDB.Entity>(
    model: RestDB.Model,
    response: RestDB.Responses.Output
  ): T | undefined {
    if (response.status.code === 200) {
      return response.payload;
    }
    return void 0;
  }

  /**
   * Gets the deleted entity status from the given response entity.
   * @param model Entity model.
   * @param response Response entity.
   * @returns Returns the deleted entity status.
   */
  @Class.Protected()
  protected getDeleteByIdResponse(model: RestDB.Model, response: RestDB.Responses.Output): boolean {
    return response.status.code === 204;
  }

  /**
   * Notify an error in the given response entity for all listeners.
   * @param model Entity model.
   * @param response Response entity.
   */
  @Class.Protected()
  protected async notifyErrorResponse(model: RestDB.Model, response: RestDB.Responses.Output): Promise<void> {
    this.payloadData = void 0;
    if (response.payload instanceof Object) {
      this.payloadData = <RestDB.Entity>response.payload;
      await super.notifyErrorResponse(model, response);
      throw new Error(`Endpoint error, please check the payload.`);
    } else {
      await super.notifyErrorResponse(model, response);
      throw new Error(`Server error: ${response.status.message}.`);
    }
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.connect('https://signrequest.com/api/v1');
  }

  /**
   * Gets the payload from the last request.
   */
  @Class.Public()
  public get payload(): RestDB.Entity | undefined {
    return this.payloadData;
  }

  /**
   * Sets the authorization token for all subsequent requests.
   * @param token Username.
   * @param password Password.
   * @returns Returns the client instance.
   */
  @Class.Public()
  public setAuthorization(token: string): Client {
    return this.setHeader('Authorization', `Token ${token}`), this;
  }
}
