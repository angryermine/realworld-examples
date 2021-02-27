import * as React from 'react';
import {Event, createEvent} from 'effector-root';
import {useEvent} from 'effector-react/ssr';
import {useParams, useLocation} from 'react-router';

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
