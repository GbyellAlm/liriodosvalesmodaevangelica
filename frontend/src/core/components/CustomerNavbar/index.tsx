import './styles.scss';
import { ReactComponent as MainImage } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const CustomerNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-1 x-small font-size-14">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <MainImage />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu suspenso">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/biblias">Bíblias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feminino">Feminino</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/masculino">Masculino</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/livros">Livros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/presentes">Presentes</Link>
                        </li>
                        <li className="nav-item padding-r-9">
                            <Link className="nav-link" to="sobrenos">Sobre nós</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 border border-light search-box font-size-14" type="search" placeholder="Pesquisar produto" aria-label="Pesquisar produto" />
                        <button className="btn btn-sm search-button" type="submit">Pesquisar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default CustomerNavbar;
