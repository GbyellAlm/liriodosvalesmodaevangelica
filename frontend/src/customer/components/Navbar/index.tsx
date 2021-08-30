import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../core/assets/images/logo.svg';
import { useState } from 'react';
import './styles.scss';

const Navbar = () => {
    const [productName, setProductName] = useState('');

    const handleChange = (productName: string) => {
        setProductName(productName);
    }

    return (
        <nav className="navbar bg-primary navbar-dark py-1 navbar-expand-xl f-s-14">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <Logo />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu suspenso">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/category/1" className="nav-link" aria-current="page">Bíblias</NavLink>
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
                    <form>
                        <div className="input-group">
                            <input
                                className="form-control f-s-14 search-input"
                                type="search"
                                placeholder="Pesquisar produto"
                                aria-label="Pesquisar produto"
                                value={productName}
                                onChange={event => handleChange(event.target.value)}
                            />
                            <button className="btn btn-sm text-white search-button" type="submit">Pesquisar</button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
