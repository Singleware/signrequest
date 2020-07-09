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
   * Set the SignRequest client authorization.
   */
  @Class.Public()
  public static setAuthorization(): void {
    this.client.setAuthorization('YOUR_TOKEN');
  }

  /**
   * Get a new document entity.
   * @returns Returns a promise to get the new document entity.
   */
  @Class.Public()
  public static async getNewDocumentEntity(): Promise<SignRequest.Documents.Entity> {
    await this.documents.create({
      fileFromContent: '<h1>Helper Document</h1>',
      fileFromContentName: 'test.html',
      autoExpireDays: 1,
      autoDeleteDays: 1
    });
    return this.documents.payload!;
  }

  /**
   * Get a new attachment entity.
   * @returns Returns a promise to get the new attachment entity.
   */
  @Class.Public()
  public static async getNewAttachmentEntity(): Promise<SignRequest.Attachments.Entity> {
    const document = await this.getNewDocumentEntity();
    await this.attachments.create({
      fileFromContent: '<h1>Helper Attachment</h1>',
      fileFromContentName: 'attachment.html',
      document: document.url
    });
    return this.attachments.payload!;
  }

  /**
   * Get a new signature entity.
   * @returns Returns a promise to get the new signature entity.
   */
  @Class.Public()
  public static async getNewSignatureEntity(): Promise<SignRequest.Signatures.Entity> {
    const document = await this.getNewDocumentEntity();
    await this.signatures.create({
      fromEmail: 'team@singleware.com.br',
      signers: [{ email: 'test@singleware.com.br' }],
      document: document.url
    });
    return this.signatures.payload!;
  }
}
