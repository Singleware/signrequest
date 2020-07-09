/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Documents from '../documents';

/**
 * Light document type.
 */
export type LightDocument = Omit<Documents.Entity, 'url'>;

/**
 * Light document fields.
 */
export const LightDocumentFields = [
  'team',
  'uuid',
  'user',
  'fileAsPdf',
  'name',
  'externalId',
  'frontendId',
  'file',
  'fileFromUrl',
  'eventsCallbackUrl',
  'fileFromContent',
  'fileFromContentName',
  'template',
  'preFillTags',
  'integrations',
  'fileFromSF',
  'autoDeleteDays',
  'autoExpireDays',
  'pdf',
  'status',
  'signRequest',
  'apiUsed',
  'signingLog',
  'securityHash',
  'attachments',
  'autoDeleteAfter',
  'sandbox',
  'autoExpireAfter',
  'processing'
];
