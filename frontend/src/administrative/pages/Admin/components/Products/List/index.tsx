import { useHistory } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { ProductsResponse } from '../../../../../../core/types/Product';
import { makePrivateRequest, makeRequest } from '../../../../../../core/utils/request';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Card from '../Card';
import Pagination from '../../../../../../core/components/Pagination';
import './styles.scss';

const List = () => {
    const history = useHistory();

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    const [activePage, setActivePage] = useState(0);

    const handleCreate = () => {
        history.push('/admin/products/new-product');
    }

    const getProducts = useCallback(() => {
        const params = {
            direction: 'DESC',
            linesPerPage: 4,
            page: activePage,
            orderBy: 'id'
        }

        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data));
    }, [activePage]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const onRemove = (productId: number) => {
        const confirm = window.confirm('Tem certeza que deseja excluír este produto?');

        if (confirm) {
            makePrivateRequest({ url: `/products/${productId}`, method: 'DELETE' })
                .then(() => {
                    toast.success("Produto excluído com sucesso!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    getProducts();
                })
                .catch(() => {
                    toast.error("Erro ao excluir o produto!");
                })
        }
    }

    return (
        <div className="admin-product-list-container">
            <Helmet title="Administrativo: Produtos · Lírio dos Vales - Moda Evangélica" />
            <div className="d-flex">
                <button className="btn btn-primary btn-lg b-r-10 text-white f-s-14" type="button" onClick={handleCreate}>
                    CADASTRAR NOVO PRODUTO
                </button>
            </div>
            <div className="admin-list-container">
                {productsResponse?.content.map(product => (
                    <Card product={product} key={product.id} onRemove={onRemove} />
                ))}
            </div>
            {productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />}
        </div>
    )
}

export default List;
