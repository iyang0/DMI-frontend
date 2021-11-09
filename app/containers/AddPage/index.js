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
// import { useHistory } from 'react-router-dom';

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

export function AddPage({ str, onChangeString, addItemDispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  // useHistory hook requires react-router-dom v5.1.0, boilerplate is on v5.0.0
  // const history = useHistory();

  const onSubmitForm = evt => {
    evt.preventDefault();
    addItemDispatch(str);
    // ideally would redirect back to main page
    // history.push('/');
  };

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
  addItemDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addPage: makeSelectAddPage(),
  str: makeSelectStr(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    addItemDispatch: str => dispatch(addItem(str)),
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
