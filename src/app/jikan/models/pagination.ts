/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type pagination = {
  pagination: {
    last_visible_page: number | 0;
    has_next_page: boolean | false;
  } | {
    last_visible_page: 0;
    has_next_page: false;
  };
};
