import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../core/assets/images/logo.svg';
import './styles.scss';

const Navbar = () => (
    <nav className="navbar py-1 bg-primary navbar-logo">
        
            <NavLink className="navbar-brand" to="">
                <Logo />
            </NavLink>
       
    </nav>
);

export default Navbar;
