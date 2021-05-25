import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../core/assets/images/logo.svg';
import './styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-xl py-1 bg-primary navbar-dark f-s-14">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <Logo />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu suspenso">
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
                        <li className="nav-item padding-r-9">
                            <NavLink to="/about" className="nav-link">Sobre nós</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 border border-light b-r-10 search-box f-s-14" type="search" placeholder="Pesquisar produto" aria-label="Pesquisar produto" />
                        <button type="submit" className="btn btn-sm b-r-10 search-button f-s-12">Pesquisar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
