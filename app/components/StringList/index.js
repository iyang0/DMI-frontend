/**
 *
 * StringList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Empty from 'components/Empty';
// import styled from 'styled-components';

function StringList({ loading, error, list }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (list !== false) {
    return <List items={list} component={Empty} />;
  }

  return null;
}

StringList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  list: PropTypes.any,
};

export default memo(StringList);
