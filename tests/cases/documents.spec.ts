/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as SignRequest from '../../source';

import { Helper } from '../helper';

/**
 * Documents test case.
 */
@Class.Describe()
export class Documents extends Testing.Case {
  /**
   * Documents mapper.
   */
  @Injection.Inject(SignRequest.Documents.Mapper)
  @Class.Private()
  private documents!: SignRequest.Documents.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create document successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createDocumentSuccessful(): Promise<void> {
    const uuid = await this.documents.create({
      fileFromContent: '<h1>Test Document</h1>',
      fileFromContentName: 'test.html',
      autoExpireDays: 1,
      autoDeleteDays: 1
    });
    this.areNotSame(uuid, void 0);
  }

  /**
   * Read document successful.
   */
  @Testing.Method()
  @Class.Public()
  public async readDocumentSuccessful(): Promise<void> {
    const inserted = await Helper.getNewDocumentEntity();
    const loaded = await this.documents.read(inserted.uuid);
    this.areNotSame(loaded, void 0);
    this.areSame(inserted.uuid, loaded!.uuid);
  }

  /**
   * Delete document successful.
   */
  @Testing.Method()
  @Class.Public()
  public async deleteDocumentSuccessful(): Promise<void> {
    const inserted = await Helper.getNewDocumentEntity();
    this.areNotSame(inserted.uuid, void 0);
    this.isTrue(await this.documents.delete(inserted.uuid));
  }
}
