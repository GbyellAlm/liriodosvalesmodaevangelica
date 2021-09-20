import { useEffect, useState } from 'react';
import { ProductsResponse } from 'core/types/Product';
import { makeRequest } from 'core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from 'core/components/PageOrSectionTitle';
import { Link } from 'react-router-dom';
import ProductCardLoader from '../../components/Loaders/CustomerProductCardLoader';
import ProductCard from '../../components/ProductCard';
import './styles.scss';

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [highlightsResponse, setHighlightsResponseResponse] = useState<ProductsResponse>();

    const [promotionsResponse, setPromotionsResponse] = useState<ProductsResponse>();

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: '/products/categoryId/6' })
            .then(response => setHighlightsResponseResponse(response.data))
            .finally(() => { setIsLoading(false); });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: '/products/categoryId/7' })
            .then(response => setPromotionsResponse(response.data))
            .finally(() => { setIsLoading(false); });
    }, []);

    return (
        <div className="m-25 base-container m-h-484 b-r-10 b-s-1-10 p-25">
            <Helmet title="Lírio dos Vales - Moda Evangélica" />
            <PageOrSectionTitle title="Destaques" />
            <div className="product-layout m-b-25">
                {isLoading ? <ProductCardLoader /> : (
                    highlightsResponse?.content.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}
            </div>
            <PageOrSectionTitle title="Promoções" />
            <div className="product-layout">
                {isLoading ? <ProductCardLoader /> : (
                    promotionsResponse?.content.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default Homepage;
