/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

/**
 * User entity class.
 */
@RestDB.Schema.Entity('documents/user')
@Class.Describe()
export class User extends Class.Null {
  /**
   * User email.
   * Between 1 and 254 characters.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String(1, 254)
  @Class.Public()
  public email!: string;

  /**
   * User first name.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('first_name')
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public firstName?: string;

  /**
   * User last name.
   * Max 255 characters.
   */
  @RestDB.Schema.Alias('last_name')
  @RestDB.Schema.String(0, 255)
  @Class.Public()
  public lastName?: string;

  /**
   * Display name.
   * Min 1 character.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Alias('display_name')
  @RestDB.Schema.String(1)
  @Class.Public()
  public displayName!: string;
}
