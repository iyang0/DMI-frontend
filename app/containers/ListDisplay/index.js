/*
 * ListDisplay
 *
 * List all the strings from backend
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default function ListDisplay() {
  return (
    <div>
      <Helmet>
        <title>String List</title>
        <meta
          name="description"
          content="Page containing UI to display all strings stored on server"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.testHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.testMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
