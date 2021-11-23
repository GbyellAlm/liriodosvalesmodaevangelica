import { NavLink } from 'react-router-dom';
import './styles.scss';

type Props = {
    catId: string;
    breadcrumbTitle: string;
}

const Breadcrumb = ({ catId, breadcrumbTitle }: Props) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase f-s-18">
                <li className="breadcrumb-item">
                    <NavLink to="/" className="c-263238">
                        Início
                    </NavLink>
                </li>
                {catId === "1" &&
                    <li className="breadcrumb-item active" aria-current="page">
                        <NavLink to="/category/1" className="breadcrumb-nav-link">
                            {breadcrumbTitle}
                        </NavLink>
                    </li>
                }
                {catId === "2" &&
                    <li className="breadcrumb-item active" aria-current="page">
                        <NavLink to="/category/2" className="breadcrumb-nav-link">
                            {breadcrumbTitle}
                        </NavLink>
                    </li>
                }
                {catId === "3" &&
                    <li className="breadcrumb-item active" aria-current="page">
                        <NavLink to="/category/3" className="breadcrumb-nav-link">
                            {breadcrumbTitle}
                        </NavLink>
                    </li>
                }
                {catId === "4" &&
                    <li className="breadcrumb-item active" aria-current="page">
                        <NavLink to="/category/4" className="breadcrumb-nav-link">
                            {breadcrumbTitle}
                        </NavLink>
                    </li>
                }
                {catId === "5" &&
                    <li className="breadcrumb-item active" aria-current="page">
                        <NavLink to="/category/5" className="breadcrumb-nav-link">
                            {breadcrumbTitle}
                        </NavLink>
                    </li>
                }
                {catId === "about-us" &&
                    <li className="breadcrumb-item active" aria-current="page">
                        <NavLink to="/about-us" className="breadcrumb-nav-link">
                            {breadcrumbTitle}
                        </NavLink>
                    </li>
                }
            </ol>
        </nav>
    )
}

export default Breadcrumb;
