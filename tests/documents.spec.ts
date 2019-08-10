/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Injection from '@singleware/injection';

import * as SignRequest from '../source';

import { Helper } from './helper';

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
    const inserted = <SignRequest.Documents.Entity>await this.documents.create({
      fileFromContent: '<h1>Test Document</h1>',
      fileFromContentName: 'test.html',
      autoExpireDays: 1,
      autoDeleteDays: 1
    });
    this.areNotSame(inserted, void 0);
  }

  /**
   * Load document successful.
   */
  @Testing.Method()
  @Class.Public()
  public async loadDocumentSuccessful(): Promise<void> {
    // Create new document.
    const inserted = <SignRequest.Documents.Entity>await Helper.getNewDocumentEntity();
    this.areNotSame(inserted, void 0);
    // Test document loading.
    const loaded = <SignRequest.Documents.Entity>await this.documents.load(inserted.uuid);
    this.areNotSame(loaded, void 0);
    this.areSame(inserted.uuid, loaded.uuid);
  }

  /**
   * Remove document successful.
   */
  @Testing.Method()
  @Class.Public()
  public async removeDocumentSuccessful(): Promise<void> {
    // Create new document.
    const inserted = <SignRequest.Documents.Entity>await Helper.getNewDocumentEntity();
    this.areNotSame(inserted, void 0);
    // Test document removal.
    this.isTrue(await this.documents.remove(inserted.uuid));
  }
}
