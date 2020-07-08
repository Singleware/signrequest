/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Signing log entity class.
 */
@RestDB.Schema.Entity('documents/signing-log')
@Class.Describe()
export class SigningLog extends Class.Null {
  /**
   * Temporary URL to signing log, expires in five minutes
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public pdf?: string | null;

  /**
   * SHA256 hash of PDF contents.
   */
  @RestDB.Schema.Alias('security_hash')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public securityHash?: string | null;
}
