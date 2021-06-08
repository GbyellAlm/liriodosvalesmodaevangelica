import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles.scss';

const List = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/products/create')
    }

    return (
        <div className="admin-products-list-container">
            <Helmet title="Admin: Produtos | Lírio dos Vales - Moda Evangélica" />
            <div className="d-flex">
                <span className="p-r-3 c-9e9e9e">OLÁ,</span>
                <p className="c-63c0e1 f-w-600 p-r-25">USERNAME</p>
                <button type="button" className="btn btn-primary btn-lg b-r-10 text-white" onClick={handleCreate}>NOVO</button>
            </div>
        </div>
    )
}

export default List;
