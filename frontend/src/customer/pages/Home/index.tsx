import { useEffect, useState } from 'react';
import { ProductsResponse } from '../../../core/types/Product';
import { makeRequest } from '../../../core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../../core/components/PageOrSectionTitle';
import { Link } from 'react-router-dom';
import ProductCard from '../../../customer/components/ProductCard';
import './styles.scss';

const Home = () => {
    const [featuredProductResponse, setFeaturedProductResponse] = useState<ProductsResponse>();

    const [promotionsResponse, setPromotionsResponse] = useState<ProductsResponse>();

    useEffect(() => {
        makeRequest({ url: '/products/categoryId/6' })
            .then(response => setFeaturedProductResponse(response.data));
    }, []);

    useEffect(() => {
        makeRequest({ url: '/products/categoryId/7' })
            .then(response => setPromotionsResponse(response.data));
    }, []);

    return (
        <div className="m-25 base-container m-h-485 b-r-10 b-s-1-10 p-25">
            <Helmet title="Lírio dos Vales - Moda Evangélica" />
            <PageOrSectionTitle title="PRODUTOS EM DESTAQUE" />
            <div className="product-layout m-b-25">
                {featuredProductResponse?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
            <PageOrSectionTitle title="PROMOÇÕES" />
            <div className="product-layout">
                {promotionsResponse?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;
