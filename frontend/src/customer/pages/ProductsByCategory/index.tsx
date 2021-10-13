import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductsResponse } from 'core/types/Product';
import { makeRequest } from 'core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from 'core/components/PageOrSectionTitle';
import ProductCardLoader from '../../components/Loaders/CustomerProductCardLoader';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import Pagination from 'core/components/Pagination';

type ParamsType = {
    catId: string;
}

const ProductsByCategory = () => {
    const { catId } = useParams<ParamsType>();

    const [isLoading, setIsLoading] = useState(false);

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 15,
            direction: 'DESC',
            orderBy: 'id'
        }

        setIsLoading(true);
        makeRequest({ url: `/products/categoryId/${catId}`, params })
            .then(response => setProductsResponse(response.data))
            .finally(() => { setIsLoading(false); })
    }, [catId, activePage]);

    return (
        <div className="m-25 m-h-484 base-container b-r-10 b-s-1-10 p-25">
            {catId === "1" && <Helmet title="Bíblias | Lírio dos Vales - Moda Evangélica" />}
            {catId === "2" && <Helmet title="Feminino | Lírio dos Vales - Moda Evangélica" />}
            {catId === "3" && <Helmet title="Masculino | Lírio dos Vales - Moda Evangélica" />}
            {catId === "4" && <Helmet title="Livros | Lírio dos Vales - Moda Evangélica" />}
            {catId === "5" && <Helmet title="Presentes | Lírio dos Vales - Moda Evangélica" />}

            {catId === "1" && <PageOrSectionTitle title="Bíblias" />}
            {catId === "2" && <PageOrSectionTitle title="Feminino" />}
            {catId === "3" && <PageOrSectionTitle title="Masculino" />}
            {catId === "4" && <PageOrSectionTitle title="Livros" />}
            {catId === "5" && <PageOrSectionTitle title="Presentes" />}
            <div className="product-layout">
                {isLoading ? <ProductCardLoader /> : (
                    productsResponse?.content.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}
            </div>
            {productsResponse?.content.length !== 0 && productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />}
        </div>
    )
}

export default ProductsByCategory;
