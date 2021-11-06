/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ListDisplay';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Features',
  },
  stateManagementHeader: {
    id: `${scope}.state_management.header`,
    defaultMessage: 'Predictable state management',
  },
  stateManagementMessages: {
    id: `${scope}.state_management.message`,
    defaultMessage: `
      Unidirectional data flow allows for change logging and time travel
    debugging.
    `,
  },
  javascriptHeader: {
    id: `${scope}.javascript.header`,
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    id: `${scope}.javascript.message`,
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    id: `${scope}.css.header`,
    defaultMessage: 'Features',
  },
  cssMessage: {
    id: `${scope}.css.message`,
    defaultMessage: 'Next generation CSS',
  },

  testHeader: {
    id: `${scope}.test.header`,
    defaultMessage: `test Header`,
  },
  testMessage: {
    id: `${scope}.test.message`,
    defaultMessage: `test Message`,
  },
});
