/**
 *
 * AddPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { addItem } from 'containers/App/actions';
import makeSelectAddPage, { makeSelectStr } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { changeString } from './actions';

const key = 'addPage';

export function AddPage({ str, onChangeString, onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <Helmet>
        <title>DMI Takehome - add string</title>
        <meta
          name="description"
          content="Form to add a string to list of strings"
        />
      </Helmet>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="str">
          <Input
            id="str"
            type="text"
            placeholder="Type any string."
            value={str}
            onChange={onChangeString}
          />
          <Button>
            <FormattedMessage {...messages.button} />
          </Button>
        </label>
      </Form>
    </div>
  );
}

AddPage.propTypes = {
  str: PropTypes.string,
  onChangeString: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addPage: makeSelectAddPage(),
  str: makeSelectStr(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      evt.preventDefault();
      dispatch(addItem());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddPage);
