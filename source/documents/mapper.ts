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
   * Creates a new document request.
   * @param request Document creation request.
   * @returns Returns a promise to get the document entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<Entity | undefined> {
    if ((await this.mapper.insertEx(Requests.Create, request)) !== void 0) {
      return RestDB.Outputer.createFull(Entity, <RestDB.Entity>this.client.payload, []);
    }
    return void 0;
  }

  /**
   * Read the document that corresponds to the specified document Id.
   * @param id Document Id.
   * @returns Returns a promise to get the document entity or undefined when the document wasn't found.
   */
  @Class.Public()
  public async read(id: string): Promise<Entity | undefined> {
    return await this.mapper.findById(id);
  }

  /**
   * Delete the document that corresponds to the specified document Id.
   * @param id Document Id.
   * @returns Returns a promise to get true when the removal was successful, false otherwise.
   */
  @Class.Public()
  public async delete(id: string): Promise<boolean> {
    return await this.mapper.deleteById(id);
  }
}
