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
 * Attachments test case.
 */
@Class.Describe()
export class Attachments extends Testing.Case {
  /**
   * Attachments mapper.
   */
  @Injection.Inject(SignRequest.Attachments.Mapper)
  @Class.Private()
  private attachments!: SignRequest.Attachments.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create attachment successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createAttachmentSuccessful(): Promise<void> {
    // Create new document.
    const document = <SignRequest.Documents.Entity>await Helper.getNewDocumentEntity();
    this.areNotSame(document, void 0);
    // Test attachment creation.
    const inserted = <SignRequest.Attachments.Entity>await this.attachments.create({
      fileFromContent: '<h1>Test Attachment</h1>',
      fileFromContentName: 'attachment.html',
      document: <string>document.url
    });
    this.areNotSame(inserted, void 0);
  }

  /**
   * Read attachment successful.
   */
  @Testing.Method()
  @Class.Public()
  public async readAttachmentSuccessful(): Promise<void> {
    // Create new attachment.
    const inserted = <SignRequest.Attachments.Entity>await Helper.getNewAttachmentEntity();
    this.areNotSame(inserted, void 0);
    // Test attachment loading.
    const loaded = <SignRequest.Attachments.Entity>await this.attachments.read(inserted.uuid);
    this.areNotSame(loaded, void 0);
    this.areSame(inserted.uuid, loaded.uuid);
  }
}
