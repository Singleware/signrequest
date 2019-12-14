/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Team entity class.
 */
@RestDB.Schema.Entity('documents/team')
@Class.Describe()
export class Team extends Class.Null {
  /**
   * Name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1)
  @Class.Public()
  public name!: string;

  /**
   * Subdomain.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Pattern(/^[-a-zA-Z0-9_]+/)
  @Class.Public()
  public subdomain!: string;

  /**
   * URL.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public url?: string;
}
