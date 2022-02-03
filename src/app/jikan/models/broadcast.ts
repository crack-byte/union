/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Broadcast Details
 */
export type broadcast = {
    /**
     * Day of the week
     */
    day?: string;
    /**
     * Time in 24 hour format
     */
    time?: string;
    /**
     * Timezone (Tz Database format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     */
    timezone?: string;
    /**
     * Raw parsed broadcast string
     */
    string?: string;
};