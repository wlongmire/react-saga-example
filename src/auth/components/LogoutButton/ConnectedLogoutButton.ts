import { connect } from 'react-redux';
import { logout } from '../../actions';
import { LogoutButton } from './LogoutButton';

export default connect(
    null,
    { logout }
)(LogoutButton);