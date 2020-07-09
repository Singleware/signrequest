/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Requests from './requests';

import { Client } from '../client';
import { Entity } from './entity';

/**
 * Documents mapper class.
 */
@Injection.Describe({ singleton: true, name: 'documents' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Last response payload.
   */
  @Class.Private()
  private lastPayload: Entity | undefined;

  /**
   * Client instance.
   */
  @Injection.Inject(() => Client)
  @Class.Private()
  private client!: Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the last request payload.
   */
  @Class.Public()
  public get payload(): Entity | undefined {
    return this.lastPayload;
  }

  /**
   * Create a new document request.
   * @param request Document creation request.
   * @returns Returns a promise to get the document Id.
   * @throws Throws an error when the server response is invalid.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    this.lastPayload = void 0;
    const uuid = await this.mapper.insertEx(Requests.Create, request);
    if (uuid === void 0) {
      throw new Error(`Unexpected server response.`);
    }
    this.lastPayload = RestDB.Outputer.createFull(Entity, this.client.payload!, []);
    return uuid;
  }

  /**
   * Read the document that corresponds to the specified document Id.
   * @param id Document Id.
   * @returns Returns a promise to get the document entity or undefined when it wasn't found.
   */
  @Class.Public()
  public async read(id: string): Promise<Entity | undefined> {
    this.lastPayload = void 0;
    this.lastPayload = await this.mapper.findById(id);
    return this.lastPayload;
  }

  /**
   * Delete the document that corresponds to the specified document Id.
   * @param id Document Id.
   * @returns Returns a promise to get true when the removal was successful, false otherwise.
   */
  @Class.Public()
  public async delete(id: string): Promise<boolean> {
    this.lastPayload = void 0;
    return await this.mapper.deleteById(id);
  }
}
