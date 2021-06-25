import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../core/assets/images/logo.svg';
import './styles.scss';

const Navbar = () => (
    <nav className="navbar bg-primary py-1 administrative-navbar">
        <NavLink to="/admin/products" className="navbar-brand">
            <Logo />
        </NavLink>
    </nav>
);

export default Navbar;
