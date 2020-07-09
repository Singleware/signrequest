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
 * Signatures mapper class.
 */
@Injection.Describe({ singleton: true, name: 'signatures' })
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
   * Creates a new signature request.
   * @param request Signature creation request.
   * @returns Returns a promise to get the signature Id.
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
   * Read the signature that corresponds to the specified Id.
   * @param id Signature Id.
   * @returns Returns a promise to get the signature entity or undefined when it wasn't found.
   */
  @Class.Public()
  public async read(id: string): Promise<Entity | undefined> {
    this.lastPayload = void 0;
    this.lastPayload = await this.mapper.findById(id);
    return this.lastPayload;
  }

  /**
   * Cancel the signature that corresponds to the specified Id.
   * @param id Signature Id.
   * @returns Returns a promise to get true when the cancellation was successful, false otherwise.
   */
  @Class.Public()
  public async cancel(id: string): Promise<boolean> {
    this.lastPayload = void 0;
    if (await this.mapper.updateByIdEx(Requests.Cancel, id, {}, { method: RestDB.Method.POST })) {
      return this.client.payload?.cancelled === true;
    }
    return false;
  }

  /**
   * Resend the signature that corresponds to the specified Id.
   * @param id Signature Id.
   * @returns Returns a promise to get true when the cancellation was successful, false otherwise.
   */
  @Class.Public()
  public async resend(id: string): Promise<boolean> {
    this.lastPayload = void 0;
    if (await this.mapper.updateByIdEx(Requests.Resend, id, {}, { method: RestDB.Method.POST })) {
      return this.client.payload?.detail === 'OK';
    }
    return false;
  }
}
