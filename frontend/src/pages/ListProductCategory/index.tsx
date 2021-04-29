import { useEffect, useState } from 'react';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/types/Product';
import WhiteContainer from '../../core/components/WhiteContainer';
import PageSectionTitle from '../../core/components/PageSectionTitle';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';

const ListProductCategory = () => {
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    
    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 15
        }

        makeRequest({url: '/products/categoryId/1', params})
        .then(response => setProductsResponse(response.data));
    }, []);
    
    return (
        <WhiteContainer>
            <div>
                <PageSectionTitle title="BÍBLIAS"/>
                <div className="product-layout">
                    {productsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </WhiteContainer>
    )
}

export default ListProductCategory;