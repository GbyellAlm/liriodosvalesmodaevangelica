import { NavLink } from 'react-router-dom';
import './styles.scss';

const Sidebar = () => (
    <nav className="sidebar-container">
        <ul>
            <li>
                <NavLink to="/admin/products" className="sidebar-item b-b-1-s-e5e5e5 f-s-14 f-w-600 c-9e9e9e">PRODUTOS</NavLink>
            </li>
            <li>
                <NavLink to="/admin/about-us" className="sidebar-item b-b-1-s-e5e5e5 f-s-14 f-w-600 c-9e9e9e">SOBRE NÓS</NavLink>
            </li>
            <li>
                <NavLink to="" className="sidebar-logout b-b-1-s-e5e5e5 c-df5753 f-s-14 f-w-600">SAIR</NavLink>
            </li>
        </ul>
    </nav>
);

export default Sidebar;
