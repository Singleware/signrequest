import * as Class from '@singleware/class';
import * as Documents from '../documents';
import * as Signatures from '../signatures';
import * as Internals from './internals';
import * as Types from './types';
/**
 * Event entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Event Id.
     * Max 36 characters.
     */
    uuid: string;
    /**
     * Status.
     */
    status: Types.Status;
    /**
     * Timestamp.
     */
    timestamp: Date;
    /**
     * Token name.
     */
    tokenName: string;
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
     * Document entity.
     */
    document: Documents.Entity;
    /**
     * Signer entity.
     */
    signer?: Signatures.Commons.Signer | null;
    /**
     * Team entity.
     */
    team: Internals.Team;
    /**
     * Determines whether or not this event is valid according to the specified API token.
     * @param token Token.
     * @returns Returns true when the event is valid, false otherwise.
     */
    validate(token: string): boolean;
}
