/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  list: {
    id: `${scope}.list`,
    defaultMessage: 'List',
  },
  add: {
    id: `${scope}.add`,
    defaultMessage: 'Add',
  },
});
