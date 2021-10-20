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
        <div className="m-25 m-h-520 base-container b-r-10 b-s-1-10 p-25">
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
            <a href="https://api.whatsapp.com/send?phone=5547999887766&text=Olá!%20Tenho%20dúvidas%20sobre%20um%20produto%20e/%20ou%20me%20interessei%20por%20um%20produto."
                className="bt-whatsApp" target="_blank" rel="noreferrer">
                <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI2MHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2MCA2MCIgd2lkdGg9IjYwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJmbGF0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9IndoYXRzYXBwIj48cGF0aCBkPSJNMzAsNjAgQzQ2LjU2ODU0MzMsNjAgNjAsNDYuNTY4NTQzMyA2MCwzMCBDNjAsMTMuNDMxNDU2NyA0Ni41Njg1NDMzLDAgMzAsMCBDMTMuNDMxNDU2NywwIDAsMTMuNDMxNDU2NyAwLDMwIEMwLDQ2LjU2ODU0MzMgMTMuNDMxNDU2Nyw2MCAzMCw2MCBaIiBmaWxsPSIjNTdCQjYzIi8+PHBhdGggZD0iTTMwLjA3MTI2MTUsNDYuMjIxMDQ2MiBDMjcuMjEwODMwOCw0Ni4yMjEwNDYyIDI0LjUyMzU2OTIsNDUuNDg5OTY5MiAyMi4xODU2LDQ0LjIwNjg5MjMgTDEzLjE1Mzg0NjIsNDcuMDc2OTIzMSBMMTYuMDk4MDkyMywzOC4zOTE4NzY5IEMxNC42MTMwNDYyLDM1Ljk1MjM2OTIgMTMuNzU3NTM4NSwzMy4wOTE1NjkyIDEzLjc1NzUzODUsMzAuMDMzNiBDMTMuNzU3NTM4NSwyMS4wOTM0MTU0IDIxLjA2MTI5MjMsMTMuODQ2MTUzOCAzMC4wNzE2MzA4LDEzLjg0NjE1MzggQzM5LjA4MDg2MTUsMTMuODQ2MTUzOCA0Ni4zODQ2MTU0LDIxLjA5MzQxNTQgNDYuMzg0NjE1NCwzMC4wMzM2IEM0Ni4zODQ2MTU0LDM4Ljk3Mzc4NDYgMzkuMDgxMjMwOCw0Ni4yMjEwNDYyIDMwLjA3MTI2MTUsNDYuMjIxMDQ2MiBaIE0zMC4wNzEyNjE1LDE2LjQyNDEyMzEgQzIyLjUwNzkzODUsMTYuNDI0MTIzMSAxNi4zNTU4MTU0LDIyLjUyOTM1MzggMTYuMzU1ODE1NCwzMC4wMzM2IEMxNi4zNTU4MTU0LDMzLjAxMTQ0NjIgMTcuMzI2NTIzMSwzNS43NjkyMzA4IDE4Ljk2ODEyMzEsMzguMDEzMDQ2MiBMMTcuMjU0ODkyMyw0My4wNjcwNzY5IEwyMi41MjUyOTIzLDQxLjM5MTg3NjkgQzI0LjY5MTIsNDIuODEzNzg0NiAyNy4yODU0MTU0LDQzLjY0MzA3NjkgMzAuMDcxMjYxNSw0My42NDMwNzY5IEMzNy42MzM0NzY5LDQzLjY0MzA3NjkgNDMuNzg2NzA3NywzNy41MzgyMTU0IDQzLjc4NjcwNzcsMzAuMDMzOTY5MiBDNDMuNzg2NzA3NywyMi41Mjk3MjMxIDM3LjYzMzQ3NjksMTYuNDI0MTIzMSAzMC4wNzEyNjE1LDE2LjQyNDEyMzEgTDMwLjA3MTI2MTUsMTYuNDI0MTIzMSBaIE0zOC4zMDg4LDMzLjc2MTcyMzEgQzM4LjIwODM2OTIsMzMuNTk2Njc2OSAzNy45NDE3ODQ2LDMzLjQ5Njk4NDYgMzcuNTQyNjQ2MiwzMy4yOTg3MDc3IEMzNy4xNDI0LDMzLjEwMDQzMDggMzUuMTc1ODc2OSwzMi4xNDAwNjE1IDM0LjgwOTk2OTIsMzIuMDA4MjQ2MiBDMzQuNDQyOTUzOCwzMS44NzYwNjE1IDM0LjE3NiwzMS44MDkyMzA4IDMzLjkwOTc4NDYsMzIuMjA2NTIzMSBDMzMuNjQzNTY5MiwzMi42MDM4MTU0IDMyLjg3NzA0NjIsMzMuNDk2OTg0NiAzMi42NDMzMjMxLDMzLjc2MTcyMzEgQzMyLjQwOTk2OTIsMzQuMDI2ODMwOCAzMi4xNzY5ODQ2LDM0LjA2MDA2MTUgMzEuNzc3MTA3NywzMy44NjE0MTU0IEMzMS4zNzc2LDMzLjY2MzEzODUgMzAuMDg4OTg0NiwzMy4yNDQwNjE1IDI4LjU2MTEwNzcsMzEuODkyMzA3NyBDMjcuMzcyNTUzOCwzMC44NDA3Mzg1IDI2LjU2OTg0NjIsMjkuNTQyNTIzMSAyNi4zMzY4NjE1LDI5LjE0NDg2MTUgQzI2LjEwMzUwNzcsMjguNzQ3OTM4NSAyNi4zMTIxMjMxLDI4LjUzMzQxNTQgMjYuNTEyMjQ2MiwyOC4zMzU4NzY5IEMyNi42OTIwNjE1LDI4LjE1NzkwNzcgMjYuOTEyMTIzMSwyNy44NzI0OTIzIDI3LjExMjI0NjIsMjcuNjQwOTg0NiBDMjcuMzEyMzY5MiwyNy40MDkxMDc3IDI3LjM3ODgzMDgsMjcuMjQ0MDYxNSAyNy41MTE3NTM4LDI2Ljk3ODk1MzggQzI3LjY0NTQxNTQsMjYuNzE0MjE1NCAyNy41Nzg1ODQ2LDI2LjQ4MjcwNzcgMjcuNDc4NTIzMSwyNi4yODM2OTIzIEMyNy4zNzg0NjE1LDI2LjA4NTQxNTQgMjYuNTc4MzM4NSwyNC4xMzI5MjMxIDI2LjI0NTI5MjMsMjMuMzM4MzM4NSBDMjUuOTEyMjQ2MiwyMi41NDQ0OTIzIDI1LjU3OTU2OTIsMjIuNjc2Njc2OSAyNS4zNDU4NDYyLDIyLjY3NjY3NjkgQzI1LjExMjQ5MjMsMjIuNjc2Njc2OSAyNC44NDU5MDc3LDIyLjY0MzQ0NjIgMjQuNTc5MzIzMSwyMi42NDM0NDYyIEMyNC4zMTI3Mzg1LDIyLjY0MzQ0NjIgMjMuODc5MjYxNSwyMi43NDI3NjkyIDIzLjUxMjYxNTQsMjMuMTM5NjkyMyBDMjMuMTQ2MzM4NSwyMy41MzY5ODQ2IDIyLjExMzYsMjQuNDk2OTg0NiAyMi4xMTM2LDI2LjQ0OTEwNzcgQzIyLjExMzYsMjguNDAxNiAyMy41NDU4NDYyLDMwLjI4OCAyMy43NDYzMzg1LDMwLjU1MjM2OTIgQzIzLjk0NjA5MjMsMzAuODE2NzM4NSAyNi41MTE4NzY5LDM0Ljk1MzYgMzAuNTc2NzM4NSwzNi41NDI0IEMzNC42NDMwNzY5LDM4LjEzMDgzMDggMzQuNjQzMDc2OSwzNy42MDA5ODQ2IDM1LjM3NjM2OTIsMzcuNTM0ODkyMyBDMzYuMTA4NTUzOCwzNy40Njg4IDM3Ljc0MTI5MjMsMzYuNTc1MjYxNSAzOC4wNzU0NDYyLDM1LjY0ODg2MTUgQzM4LjQwODEyMzEsMzQuNzIxNzIzMSAzOC40MDgxMjMxLDMzLjkyNzEzODUgMzguMzA4OCwzMy43NjE3MjMxIEwzOC4zMDg4LDMzLjc2MTcyMzEgWiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PC9zdmc+"
                    alt="" width="70px"></img>
            </a>
            <span id="alertWapp">1</span>
            <div id="msg1">
                A paz do senhor! :)<br />Dúvidas sobre um produto e/ou se interessou por um produto? Fale pelo Whats
            </div>
        </div>
    )
}

export default Homepage;
