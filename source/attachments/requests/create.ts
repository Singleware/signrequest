/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Create attachment, entity class.
 */
@RestDB.Schema.Entity('document-attachments')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Defaults to filename, including extension.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public name?: string | null;

  /**
   * Base64 encoded document content.
   */
  @RestDB.Schema.Alias('file_from_content')
  @RestDB.Schema.Base64()
  @RestDB.Schema.Null()
  @Class.Public()
  public fileFromContent?: string | null;

  /**
   * Filename, including extension.
   * Required when using file_from_content.
   */
  @RestDB.Schema.Alias('file_from_content_name')
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public fileFromContentName?: string | null;

  /**
   * Publicly accessible URL of document to be downloaded by SignRequest.
   * Max 2100 characters.
   */
  @RestDB.Schema.Alias('file_from_url')
  @RestDB.Schema.String(0, 2100)
  @RestDB.Schema.Null()
  @Class.Public()
  public fileFromUrl?: string | null;

  /**
   * Document URL.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public document!: string;
}
