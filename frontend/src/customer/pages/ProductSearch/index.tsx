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
import './styles.scss';

type ParamsType = {
    productName: string;
}

const ProductSearch = () => {
    const { productName } = useParams<ParamsType>();

    const [isLoading, setIsLoading] = useState(false);

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            name: productName,
            page: activePage
        }

        setIsLoading(true);
        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => { setIsLoading(false); });
    }, [productName, activePage]);

    return (
        <div className="m-25 m-h-484 base-container b-r-10 b-s-1-10 p-25">
            <Helmet title={`"` + productName + `" | Lírio dos Vales - Moda Evangélica`} />
            <PageOrSectionTitle title={`Resultados da pesquisa de "` + productName + `"`} />
            {isLoading ?
                <div className="product-layout">
                    <ProductCardLoader />
                </div>
                : (
                    productsResponse?.content.length !== 0 ?
                        <div className="product-layout">
                            {productsResponse?.content.map(product => (
                                <Link to={`/product/${product.id}`} key={product.id}>
                                    <ProductCard product={product} />
                                </Link>
                            ))}
                        </div>
                        :
                        <div className="search-unsuccessful">
                            <p>Sua pesquisa por <b>"{productName}"</b> não correspondeu a nenhum produto.</p>
                            <p className="mt-2"><b>Dicas:</b></p>
                            <ul>
                                <li>Certifique-se de escrever corretamente todas as palavras (acentuação + grafia);</li>
                                <li>Pesquise por palavras-chave mais genéricas, por exemplo: <u>Pentecostal</u> ao invés de <i>Bíblia pentecostal</i> e <u>Blusa</u> ao invés de <i>Blusas</i>.</li>
                            </ul>
                        </div>
                )}
            {productsResponse?.content.length !== 0 && productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />}
        </div>
    )
}

export default ProductSearch;
