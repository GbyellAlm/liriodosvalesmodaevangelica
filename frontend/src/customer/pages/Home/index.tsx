import { useEffect, useState } from 'react';
import { ProductsResponse } from '../../../core/types/Product';
import { makeRequest } from '../../../core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../../core/components/PageOrSectionTitle';
import { Link } from 'react-router-dom';
import ProductCard from '../../../customer/components/ProductCard';

const Home = () => {
    const [featuredProductsResponse, setFeaturedProductsResponse] = useState<ProductsResponse>();

    useEffect(() => {
        makeRequest({ url: '/products/categoryId/6' })
            .then(response => setFeaturedProductsResponse(response.data));
    }, []);

    const [promotionsResponse, setPromotionsResponse] = useState<ProductsResponse>();

    useEffect(() => {
        makeRequest({ url: '/products/categoryId/7' })
            .then(response => setPromotionsResponse(response.data));
    }, []);

    return (
        <div className="base-container m-25 m-h-487 b-r-10 b-s-1-10 p-25">
            <Helmet title="Lírio dos Vales - Moda Evangélica" />
            <div>
                <div className="featured-products-container">
                    <PageOrSectionTitle title="PRODUTOS EM DESTAQUE" />
                    {featuredProductsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
                <div className="container-products-on-sale">
                    <PageOrSectionTitle title="PROMOÇÕES" />
                    {promotionsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
