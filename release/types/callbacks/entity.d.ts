import * as Class from '@singleware/class';
import * as Documents from '../documents';
import * as Signatures from '../signatures';
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
     * Event type.
     */
    eventType: Types.Event;
    /**
     * Event time.
     */
    eventTime: string;
    /**
     * Event hash.
     */
    eventHash: string;
    /**
     * Document entity.
     */
    document?: Documents.Entity | null;
    /**
     * Signer entity.
     */
    signer?: Signatures.Responses.Internals.Signer | null;
    /**
     * Determines whether or not this event is valid according to the specified API token.
     * @param token Token.
     * @returns Returns true when the event is valid, false otherwise.
     */
    validate(token: string): boolean;
}
