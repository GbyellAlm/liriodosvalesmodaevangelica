import { NavLink } from 'react-router-dom';
import './styles.scss';

const Sidebar = () => (
    <nav className="sidebar-container">
        <ul>
            <li>
                <NavLink to="/admin/products" className="c-9e9e9e f-s-14 f-w-600 b-b-1-s-e5e5e5 sidebar-item">MEUS PRODUTOS</NavLink>
            </li>
            <li>
                <NavLink to="/admin/about" className="c-9e9e9e f-s-14 f-w-600 b-b-1-s-e5e5e5 sidebar-item">MEU "SOBRE NÓS"</NavLink>
            </li>
            <li>
                <NavLink to="/" className="c-9e9e9e f-s-14 f-w-600 b-b-1-s-e5e5e5 view-site" target="_blank">VISUALIZAR SITE</NavLink>
            </li>
            <li>
                <NavLink to="#" className="c-dc3545 f-s-14 f-w-600 b-b-1-s-e5e5e5 logout">SAIR</NavLink>
            </li>
        </ul>
    </nav>
);

export default Sidebar;
