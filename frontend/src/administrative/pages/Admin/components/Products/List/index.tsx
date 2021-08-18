import { useEffect, useState } from 'react';
import { ProductsResponse } from '../../../../../../core/types/Product';
import { makeRequest } from '../../../../../../core/utils/request';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Card from '../Card';
import Pagination from '../../../../../../core/components/Pagination';
import './styles.scss';

const List = () => {
    const history = useHistory();

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            direction: 'DESC',
            linesPerPage: 4,
            page: activePage,
            orderBy: 'id'
        }

        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data));
    }, [activePage]);

    const handleCreate = () => {
        history.push('/admin/products/new-product');
    }

    return (
        <div className="admin-product-list-container">
            <Helmet title="Administrativo: Produtos · Lírio dos Vales - Moda Evangélica" />
            <div className="d-flex">
                <button className="btn btn-primary btn-lg b-r-10 text-white f-s-14" type="button" title="Cadastrar novo produto" onClick={handleCreate}>
                    NOVO
                </button>
            </div>
            <div className="admin-list-container">
                {productsResponse?.content.map(product => (
                    <Card product={product} key={product.id} />
                ))}
            </div>
            {productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />}
        </div>
    )
}

export default List;
