/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';

import * as SignRequest from '../source';

/**
 * Helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Sets the SignRequest client authorization.
   */
  @Class.Public()
  public static setAuthorization(): void {
    Injection.resolve(SignRequest.Client).setAuthorization('YOUR_TOKEN');
  }

  /**
   * Gets a new document entity.
   * @returns Returns a promise to get the new document entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public static async getNewDocumentEntity(): Promise<SignRequest.Documents.Entity | undefined> {
    return await Injection.resolve(SignRequest.Documents.Mapper).create({
      fileFromContent: '<h1>Helper Document</h1>',
      fileFromContentName: 'test.html',
      autoExpireDays: 1,
      autoDeleteDays: 1
    });
  }

  /**
   * Gets a new attachment entity.
   * @returns Returns a promise to get the new attachment entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public static async getNewAttachmentEntity(): Promise<SignRequest.Attachments.Entity | undefined> {
    const document = <SignRequest.Documents.Entity>await Helper.getNewDocumentEntity();
    if (!document) {
      throw new Error(`Document for the attachment wasn't created.`);
    }
    return await Injection.resolve(SignRequest.Attachments.Mapper).create({
      fileFromContent: '<h1>Helper Attachment</h1>',
      fileFromContentName: 'attachment.html',
      document: document.url
    });
  }

  /**
   * Gets a new signature entity.
   * @returns Returns a promise to get the new signature entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public static async getNewSignatureEntity(): Promise<SignRequest.Signatures.Entity | undefined> {
    const document = <SignRequest.Documents.Entity>await Helper.getNewDocumentEntity();
    if (!document) {
      throw new Error(`Document for the signature wasn't created.`);
    }
    return await Injection.resolve(SignRequest.Signatures.Mapper).create({
      fromEmail: 'team@singleware.com.br',
      signers: [{ email: 'test@singleware.com.br' }],
      document: document.url
    });
  }
}
