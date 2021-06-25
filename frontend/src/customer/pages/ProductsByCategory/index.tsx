import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductsResponse } from '../../../core/types/Product';
import { makeRequest } from '../../../core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../../core/components/PageOrSectionTitle';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import Pagination from '../../../core/components/Pagination';

type ParamsType = {
    catId: string;
}

const ProductsByCategory = () => {
    const { catId } = useParams<ParamsType>();

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 15
        }

        makeRequest({ url: `/products/categoryId/${catId}`, params })
            .then(response => setProductsResponse(response.data));
    }, [catId, activePage]);

    return (
        <div className="m-25 base-container m-h-485 b-r-10 b-s-1-10 p-25">
            {catId === "1" && <Helmet title="Bíblias · Lírio dos vales - Moda Evangélica" />}
            {catId === "2" && <Helmet title="Feminino · Lírio dos vales - Moda Evangélica" />}
            {catId === "3" && <Helmet title="Masculino · Lírio dos vales - Moda Evangélica" />}
            {catId === "4" && <Helmet title="Livros · Lírio dos vales - Moda Evangélica" />}
            {catId === "5" && <Helmet title="Presentes · Lírio dos vales - Moda Evangélica" />}

            {catId === "1" && <PageOrSectionTitle title="BÍBLIAS" />}
            {catId === "2" && <PageOrSectionTitle title="FEMININO" />}
            {catId === "3" && <PageOrSectionTitle title="MASCULINO" />}
            {catId === "4" && <PageOrSectionTitle title="LIVROS" />}
            {catId === "5" && <PageOrSectionTitle title="PRESENTES" />}
            <div className="product-layout">
                {productsResponse?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
            {productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />}
        </div>
    )
}

export default ProductsByCategory;
