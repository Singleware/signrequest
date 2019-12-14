/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Attachment entity class.
 */
@RestDB.Schema.Entity('document-attachments')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Attachment URL
   */
  @RestDB.Schema.String()
  @Class.Public()
  public url?: string;

  /**
   * Attachment Id.
   * Max 36 characters.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Required()
  @RestDB.Schema.String(0, 36)
  @Class.Public()
  public uuid!: string;

  /**
   * Defaults to filename, including extension.
   * Max 255 characters.
   */
  @RestDB.Schema.String(0, 255)
  @RestDB.Schema.Null()
  @Class.Public()
  public name?: string | null;

  /**
   * Temporary URL to document attachment, expires in five minutes.
   */
  @RestDB.Schema.String()
  @RestDB.Schema.Null()
  @Class.Public()
  public file?: string | null;

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
