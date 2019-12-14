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
   * API client.
   */
  @Injection.Inject(SignRequest.Client)
  @Class.Private()
  private static client: SignRequest.Client;

  /**
   * Documents mapper.
   */
  @Injection.Inject(SignRequest.Documents.Mapper)
  @Class.Private()
  private static documents: SignRequest.Documents.Mapper;

  /**
   * Attachments mapper.
   */
  @Injection.Inject(SignRequest.Attachments.Mapper)
  @Class.Private()
  private static attachments: SignRequest.Attachments.Mapper;

  /**
   * Signatures mapper.
   */
  @Injection.Inject(SignRequest.Signatures.Mapper)
  @Class.Private()
  private static signatures: SignRequest.Signatures.Mapper;

  /**
   * Sets the SignRequest client authorization.
   */
  @Class.Public()
  public static setAuthorization(): void {
    this.client.setAuthorization('YOUR_TOKEN');
  }

  /**
   * Gets a new document entity.
   * @returns Returns a promise to get the new document entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public static async getNewDocumentEntity(): Promise<SignRequest.Documents.Entity | undefined> {
    return await this.documents.create({
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
    const document = <SignRequest.Documents.Entity>await this.getNewDocumentEntity();
    if (!document) {
      throw new Error(`Document for the attachment wasn't created.`);
    }
    return await this.attachments.create({
      fileFromContent: '<h1>Helper Attachment</h1>',
      fileFromContentName: 'attachment.html',
      document: <string>document.url
    });
  }

  /**
   * Gets a new signature entity.
   * @returns Returns a promise to get the new signature entity or undefined when the operation has been failed.
   */
  @Class.Public()
  public static async getNewSignatureEntity(): Promise<SignRequest.Signatures.Entity | undefined> {
    const document = <SignRequest.Documents.Entity>await this.getNewDocumentEntity();
    if (!document) {
      throw new Error(`Document for the signature wasn't created.`);
    }
    return await this.signatures.create({
      fromEmail: 'team@singleware.com.br',
      signers: [{ email: 'test@singleware.com.br' }],
      document: <string>document.url
    });
  }
}
