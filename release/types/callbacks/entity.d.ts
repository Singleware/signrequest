import * as Class from '@singleware/class';
import * as Documents from '../documents';
import * as Signatures from '../signatures';
import * as Types from './types';
/**
 * Event entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Document entity.
     */
    document: Documents.Entity;
    /**
     * Event hash.
     */
    eventHash: string;
    /**
     * Event time.
     */
    eventTime: string;
    /**
     * Event type.
     */
    eventType: Types.Event;
    /**
     * Signer entity.
     */
    signer?: Signatures.Responses.Internals.Signer | null;
    /**
     * Status.
     */
    status: Types.Status;
    /**
     * Team entity.
     */
    team: Documents.Internals.Team;
    /**
     * Timestamp.
     */
    timestamp: Date;
    /**
     * Token name.
     */
    tokenName: string;
    /**
     * Event Id.
     * Max 36 characters.
     */
    uuid: string;
    /**
     * Determines whether or not this event is valid according to the specified API token.
     * @param token Token.
     * @returns Returns true when the event is valid, false otherwise.
     */
    validate(token: string): boolean;
}
