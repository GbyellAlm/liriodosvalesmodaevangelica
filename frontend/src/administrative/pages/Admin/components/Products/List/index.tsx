import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles.scss';

const List = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/products/new-product');
    }

    return (
        <div className="admin-product-list-container">
            <Helmet title="Administrativo: Produtos · Lírio dos Vales - Moda Evangélica" />
            <div className="d-flex">
                <button className="btn btn-primary btn-lg b-r-10 text-white f-s-14" type="button" title="Cadastrar novo produto" onClick={handleCreate}>NOVO</button>
            </div>
        </div>
    )
}

export default List;
