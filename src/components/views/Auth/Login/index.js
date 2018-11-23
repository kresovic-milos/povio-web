import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { login } from '../../../../state/auth/actions';
import { getLoginState } from '../../../../state/auth/selectors';
import Login from './Login';

const actions = {
  login
};

const mapStateToProps = state => ({ ...getLoginState(state) });

export default compose(
  reduxForm({
    form: 'Login'
  }),
  connect(
    mapStateToProps,
    actions
  )
)(Login);
