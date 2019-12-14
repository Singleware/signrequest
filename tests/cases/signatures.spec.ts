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
 * Signatures test case.
 */
@Class.Describe()
export class Signatures extends Testing.Case {
  /**
   * Signatures mapper.
   */
  @Injection.Inject(SignRequest.Signatures.Mapper)
  @Class.Private()
  private signatures!: SignRequest.Signatures.Mapper;

  /**
   * Default constructor.
   */
  constructor() {
    super();
    Helper.setAuthorization();
  }

  /**
   * Create signature successful.
   */
  @Testing.Method()
  @Class.Public()
  public async createSignatureSuccessful(): Promise<void> {
    // Create new document.
    const document = <SignRequest.Documents.Entity>await Helper.getNewDocumentEntity();
    this.areNotSame(document, void 0);
    // Test signature creation.
    const inserted = <SignRequest.Signatures.Entity>await this.signatures.create({
      fromEmail: 'team@singleware.com.br',
      signers: [{ email: 'team@singleware.com.br' }],
      document: <string>document.url,
      requiredAttachments: [{ name: 'identity' }]
    });
    this.areNotSame(inserted, void 0);
  }

  /**
   * Read signature successful.
   */
  @Testing.Method()
  @Class.Public()
  public async readSignatureSuccessful(): Promise<void> {
    // Create new signature.
    const inserted = <SignRequest.Signatures.Entity>await Helper.getNewSignatureEntity();
    this.areNotSame(inserted, void 0);
    // Test signature loading.
    const loaded = <SignRequest.Signatures.Entity>await this.signatures.read(inserted.uuid);
    this.areNotSame(loaded, void 0);
    this.areSame(inserted.uuid, loaded.uuid);
  }

  /**
   * Cancel signature successful.
   */
  @Testing.Method()
  @Class.Public()
  public async cancelSignatureSuccessful(): Promise<void> {
    // Create new signature.
    const signature = <SignRequest.Signatures.Entity>await Helper.getNewSignatureEntity();
    this.areNotSame(signature, void 0);
    // Test signature cancellation.
    this.isTrue(await this.signatures.cancel(signature.uuid));
  }

  /**
   * Resend signature successful.
   */
  @Testing.Method()
  @Class.Public()
  public async resendSignatureSuccessful(): Promise<void> {
    // Create new signature.
    const signature = <SignRequest.Signatures.Entity>await Helper.getNewSignatureEntity();
    this.areNotSame(signature, void 0);
    // Test signature resending.
    this.isTrue(await this.signatures.resend(signature.uuid));
  }
}
