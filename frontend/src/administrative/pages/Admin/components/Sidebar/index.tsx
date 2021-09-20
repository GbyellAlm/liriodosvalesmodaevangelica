import { getSessionData, logout } from 'core/utils/auth';
import userIcon from 'core/assets/images/user-icon.png';
import logoutIcon from 'core/assets/images/logout-icon.png';
import { NavLink } from 'react-router-dom';
import productsIcon from 'core/assets/images/products-icon.png';
import websiteIcon from 'core/assets/images/website-icon.png';
import './styles.scss';

const Sidebar = () => {
    const sessionData = getSessionData();

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="sidebar-container">
            <ul>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle b-b-1-s-e5e5e5 sidebar-user" href="#" id="sidebarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={userIcon} alt="Ícone de usuário" className="sidebar-icons" />
                        &nbsp; {sessionData.username}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="sidebarDropdown">
                        <li>
                            <a className="dropdown-item" href="#" onClick={handleLogout}>
                                <img src={logoutIcon} alt="Ícone de logout" className="sidebar-icons" />
                                &nbsp; Sair
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/admin/products" className="c-9e9e9e f-w-600 b-b-1-s-e5e5e5 sidebar-links">
                        <img src={productsIcon} alt="Ícone de produtos" className="sidebar-icons" />
                        &nbsp; PRODUTOS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="c-9e9e9e f-w-600 b-b-1-s-e5e5e5 view-sidebar-catalog" target="_blank">
                        <img src={websiteIcon} alt="Ícone de visualizar site" className="sidebar-icons" />
                        &nbsp; VISUALIZAR CATÁLOGO
                    </NavLink>
                </li>
            </ul>

        </nav>
    );
}

export default Sidebar;
