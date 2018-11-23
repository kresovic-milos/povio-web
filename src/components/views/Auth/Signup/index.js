import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { signUp } from '../../../../state/auth/actions';
import { getSignupState } from '../../../../state/auth/signup/selectors';

import Signup from './Signup';

const actions = {
  signUp
};

const mapStateToProps = state => ({ ...getSignupState(state) });

export default compose(
  reduxForm({
    form: 'Signup'
  }),
  connect(
    mapStateToProps,
    actions
  )
)(Signup);
