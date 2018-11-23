import { connect } from 'react-redux';
import { compose } from 'recompose';
import AppToolBar from './AppToolBar';
import { getAppBarState } from '../../../state/appBar/selectors';
import { logout } from '../../../state/appBar/actions';

const actions = {
  logout
};

const mapStateToProps = state => ({ ...getAppBarState(state) });

export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(AppToolBar);
