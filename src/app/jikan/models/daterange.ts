/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Date range
 */
export type daterange = {
    /**
     * Date ISO8601
     */
    from?: string;
    /**
     * Date ISO8601
     */
    to?: string;
    /**
     * Date Prop
     */
    prop?: {
/**
 * Date Prop From
 */
from?: {
/**
 * Day
 */
day?: number;
/**
 * Month
 */
month?: number;
/**
 * year
 */
year?: number;
};
/**
 * Date Prop To
 */
to?: {
/**
 * Day
 */
day?: number;
/**
 * Month
 */
month?: number;
/**
 * year
 */
year?: number;
};
/**
 * Raw parsed string
 */
string?: string;
};
};