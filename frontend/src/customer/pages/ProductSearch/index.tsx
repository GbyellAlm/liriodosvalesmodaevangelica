import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductsResponse } from '../../../core/types/Product';
import { makeRequest } from '../../../core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../../core/components/PageOrSectionTitle';
import { Link } from 'react-router-dom';
import ProductCardLoader from '../../components/Loaders/CustomerProductCardLoader';
import ProductCard from '../../components/ProductCard';
import Pagination from '../../../core/components/Pagination';

type ParamsType = {
    productName: string;
}

const ProductSearch = () => {
    const { productName } = useParams<ParamsType>();

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    const [isLoading, setIsLoading] = useState(false);

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            name: productName,
            page: activePage
        }

        setIsLoading(true);
        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [productName, activePage]);

    return (
        <div className="m-25 base-container m-h-484 b-r-10 b-s-1-10 p-25">
            <Helmet title={"'" + productName + "' | Lírio dos Vales - Moda Evangélica"} />
            <PageOrSectionTitle title={"Resultados da pesquisa de '" + productName + "'"} />
            <div className="product-layout">
                {isLoading ? <ProductCardLoader /> : (
                    productsResponse?.content.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}
            </div>
            {productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />}
        </div>
    )
}

export default ProductSearch;
