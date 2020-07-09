/*!
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Documents from '../documents';
/**
 * Light document type.
 */
export declare type LightDocument = Omit<Documents.Entity, 'url'>;
/**
 * Light document fields.
 */
export declare const LightDocumentFields: string[];
