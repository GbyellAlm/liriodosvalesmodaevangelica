import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'core/assets/images/logo.svg';
import './styles.scss';

type FormState = {
    name: string;
}

const Navbar = () => {
    const { register, handleSubmit, reset } = useForm<FormState>();

    const history = useHistory();

    const handleCollapse = () => {
        const nav = document.getElementById("navbar");
        const btn = document.getElementById("navbarBtn");
        nav?.classList.remove("show");
        btn?.classList.add("collapsed");
    };

    const onSubmit = (data: FormState) => {
        history.push(`/search/${data.name}`);
        reset();
    }

    return (
        <nav className="navbar py-1 bg-primary navbar-dark navbar-expand-xl">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <Logo />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    id="navbarBtn"
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
                            <NavLink
                                to="/category/1"
                                className="nav-link"
                                aria-current="page"
                                onClick={handleCollapse}
                            >
                                Bíblias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/category/2"
                                className="nav-link"
                                onClick={handleCollapse}
                            >
                                Feminino
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/category/3"
                                className="nav-link"
                                onClick={handleCollapse}
                            >
                                Masculino
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/category/4"
                                className="nav-link"
                                onClick={handleCollapse}
                            >
                                Livros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/category/5"
                                className="nav-link"
                                onClick={handleCollapse}
                            >
                                Presentes
                            </NavLink>
                        </li>
                        <li className="nav-item p-r-9">
                            <NavLink
                                to="/about-us"
                                className="nav-link"
                                onClick={handleCollapse}
                            >
                                Sobre nós
                            </NavLink>
                        </li>
                    </ul>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group">
                            <input
                                className="form-control search-input"
                                type="search"
                                placeholder="Encontre o produto desejado..."
                                aria-label="Encontre o produto desejado..."
                                name="name"
                                ref={register({ required: true })}
                            />
                            <button
                                className="btn text-white search-button"
                                type="submit"
                                title="Buscar"
                                onClick={handleCollapse}
                            >
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
