import {Helmet} from 'react-helmet'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductsResponse } from '../../core/types/Product';
import { makeRequest } from '../../core/utils/request';
import PageSectionTitle from '../../core/components/PageSectionTitle';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';

type ParamsType = {
    catId: string;
}

const ProductsByCategory = () => {
    const { catId } = useParams<ParamsType>();

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 15
        }

        makeRequest({ url: `/products/categoryId/${catId}`, params })
            .then(response => setProductsResponse(response.data));
    }, [catId]);

    return (
        <div className="base-container b-r-10 b-s-1-10 m-25 p-25">
            {catId === "1" && <Helmet title="Bíblias | Lírio dos vales - Moda Evangélica"/>}
            {catId === "2" && <Helmet title="Feminino | Lírio dos vales - Moda Evangélica"/>}
            {catId === "3" && <Helmet title="Masculino | Lírio dos vales - Moda Evangélica"/>}
            {catId === "4" && <Helmet title="Livros | Lírio dos vales - Moda Evangélica"/>}
            {catId === "5" && <Helmet title="Presentes | Lírio dos vales - Moda Evangélica"/>}
            <div>
                {catId === "1" && <PageSectionTitle title="BÍBLIAS" />}
                {catId === "2" && <PageSectionTitle title="FEMININO" />}
                {catId === "3" && <PageSectionTitle title="MASCULINO" />}
                {catId === "4" && <PageSectionTitle title="LIVROS" />}
                {catId === "5" && <PageSectionTitle title="PRESENTES" />}
                <div className="product-layout">
                    {productsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsByCategory;
