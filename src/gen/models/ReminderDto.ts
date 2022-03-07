/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientReferenceDto } from './ClientReferenceDto';
import type { ReminderType } from './ReminderType';

export type ReminderDto = {
    type?: ReminderType;
    name?: string;
    text?: string;
    due?: string;
    done?: boolean;
    sent?: boolean;
    client?: ClientReferenceDto;
};