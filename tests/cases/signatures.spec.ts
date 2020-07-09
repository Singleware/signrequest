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
    const document = await Helper.getNewDocumentEntity();
    const uuid = await this.signatures.create({
      fromEmail: 'team@singleware.com.br',
      signers: [{ email: 'team@singleware.com.br' }],
      requiredAttachments: [{ name: 'identity' }],
      document: document.url
    });
    this.areNotSame(uuid, void 0);
  }

  /**
   * Read signature successful.
   */
  @Testing.Method()
  @Class.Public()
  public async readSignatureSuccessful(): Promise<void> {
    const inserted = await Helper.getNewSignatureEntity();
    const loaded = await this.signatures.read(inserted.uuid);
    this.areNotSame(loaded, void 0);
    this.areSame(inserted.uuid, loaded!.uuid);
  }

  /**
   * Cancel signature successful.
   */
  @Testing.Method()
  @Class.Public()
  public async cancelSignatureSuccessful(): Promise<void> {
    const signature = await Helper.getNewSignatureEntity();
    this.areNotSame(signature.uuid, void 0);
    this.isTrue(await this.signatures.cancel(signature.uuid));
  }

  /**
   * Resend signature successful.
   */
  @Testing.Method()
  @Class.Public()
  public async resendSignatureSuccessful(): Promise<void> {
    const signature = await Helper.getNewSignatureEntity();
    this.areNotSame(signature.uuid, void 0);
    this.isTrue(await this.signatures.resend(signature.uuid));
  }
}
