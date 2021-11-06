/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'DMI-frontend.components.Footer';

export default defineMessages({
  byMessage: {
    id: `${scope}.boilerplate.message`,
    defaultMessage:
      'This project was made by Ivan Yang with the {boilerplate}.',
  },
  forMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made for {for}.
    `,
  },
});
