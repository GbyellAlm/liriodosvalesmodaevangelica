import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles.scss';

const List = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/products/create');
    }

    return (
        <div className="admin-product-list-container">
            <Helmet title="Admin: Meus produtos | Lírio dos Vales - Moda Evangélica" />
            <div className="d-flex">
                <span className="p-r-3">OLÁ,</span>
                <p className="c-63c0e1 f-w-600 p-r-25">ADMIN</p>
                <button type="button" className="btn btn-primary btn-lg b-r-10 text-white f-s-14" onClick={handleCreate}>CADASTRAR NOVO PRODUTO</button>
            </div>
        </div>
    )
}

export default List;
