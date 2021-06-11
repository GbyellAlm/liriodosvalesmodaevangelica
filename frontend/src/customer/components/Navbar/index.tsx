import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../core/assets/images/logo.svg';
import './styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-xl py-1 bg-primary navbar-dark f-s-14">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <Logo />
                </NavLink>
                <button type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Menu suspenso"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/category/1" className="nav-link">Bíblias</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/2" className="nav-link">Feminino</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/3" className="nav-link">Masculino</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/4" className="nav-link">Livros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/5" className="nav-link">Presentes</NavLink>
                        </li>
                        <li className="nav-item p-r-9">
                            <NavLink to="/about" className="nav-link">Sobre nós</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input type="search"
                            className="form-control b-r-10 me-2 f-s-14 search-box"
                            placeholder="Pesquisar produto"
                            aria-label="Pesquisar produto"
                        />
                        <button type="submit" className="btn btn-sm b-r-10 f-s-12 search-button">Pesquisar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
