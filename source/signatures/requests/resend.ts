/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Resend signature, entity class.
 */
@RestDB.Schema.Entity('signrequests/{id}/resend_signrequest_email')
@Class.Describe()
export class Resend extends Class.Null {}
