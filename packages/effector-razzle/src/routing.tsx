import {Event, createEvent} from 'effector-root';

export interface StartParams {
    params?: Record<string, string>;
    query?: Record<string, string>;
}

/**
 * Creates event to handle universal page loading
 */
export function createStart(...params: string[]): Event<StartParams> {
    return createEvent(...params);
}
