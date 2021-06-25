import userIcon from '../../../../../core/assets/images/user-icon.png';
import logoutIcon from '../../../../../core/assets/images/logout-icon.png';
import { NavLink } from 'react-router-dom';
import productsIcon from '../../../../../core/assets/images/products-icon.png';
import aboutIcon from '../../../../../core/assets/images/about-icon.png';
import websiteIcon from '../../../../../core/assets/images/website-icon.png';
import './styles.scss';

const Sidebar = () => (
    <nav className="sidebar-container">
        <ul>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle f-s-14 b-b-1-s-e5e5e5 sidebar-user" href="#" id="sidebarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={userIcon} alt="Ícone de usuario" className="sidebar-icons" />
                    &nbsp; Username
                </a>
                <ul className="dropdown-menu" aria-labelledby="sidebarDropdown">
                    <li>
                        <a className="dropdown-item" href="#">
                            <img src={logoutIcon} alt="Ícone de logout" className="sidebar-icons" />
                            &nbsp; Sair
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink to="/admin/products" className="c-9e9e9e f-s-14 f-w-600 b-b-1-s-e5e5e5 sidebar-links">
                    <img src={productsIcon} alt="Ícone de produtos" className="sidebar-icons" />
                    &nbsp; PRODUTOS
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/about" className="c-9e9e9e f-s-14 f-w-600 b-b-1-s-e5e5e5 sidebar-links">
                    <img src={aboutIcon} alt="Ícone do 'Sobre nós'" className="sidebar-icons" />
                    &nbsp; SOBRE NÓS
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="c-9e9e9e f-s-14 f-w-600 b-b-1-s-e5e5e5 view-sidebar-store" target="_blank">
                    <img src={websiteIcon} alt="Ícone do 'Visualizar site'" className="sidebar-icons" />
                    &nbsp; VISUALIZAR LOJA
                </NavLink>
            </li>
        </ul>

    </nav>
);

export default Sidebar;