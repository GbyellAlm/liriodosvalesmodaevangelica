import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../../core/types/Product';
import { makeRequest } from '../../../core/utils/request';
import { Helmet } from 'react-helmet';
import ProductImagesCarousel from './components/ProductImagesCarousel';
import OldProductPrice from '../../../core/components/OldProductPrice';
import ProductPrice from '../../../core/components/ProductPrice';
import ProductSizes from '../../../core/components/ProductSizes';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();

    const [product, setProduct] = useState<Product>();

    const history = useHistory();

    useEffect(() => {
        makeRequest({ url: `/products/${productId}` })
            .then(response => setProduct(response.data))
    }, [productId]);

    let description = ""
    if (product?.description !== undefined) {
        description = product?.description;
    }

    return (
        <div className="m-25 base-container m-h-485 b-r-10 b-s-1-10 p-25">
            <Helmet title={product?.name + " · Lírio dos Vales - Moda Evangélica"} />
            <div>
                <button type="button" className="btn btn-sm btn-primary text-white back-button" onClick={history.goBack}>
                    Voltar
                </button>
            </div>
            <div className="row">
                <div className="col-6 d-flex b-1-s-e5e5e5 b-r-10 justify-content-center product-images-container">
                    <ProductImagesCarousel product={product} />
                </div>
                <div className="col-6 product-details">
                    <h1 className="f-s-20 f-w-600 m-b-15">
                        {product?.name}
                    </h1>
                    {product?.promotionalPrice !== null && product?.price && <OldProductPrice price={product?.price} />}
                    {product?.price && <ProductPrice price={product?.promotionalPrice !== null ? product?.promotionalPrice : product?.price} />}
                    <p className="c-9e9e9e f-s-14">
                        {product?.paymentTerms}
                    </p>
                    {product?.sizes !== null && product?.sizes && <ProductSizes sizes={product?.sizes} />}
                </div>
            </div>
            <div className="product-description">
                <h2 className="f-s-18 f-w-600">Descrição do produto</h2>
                <div className="f-s-14">
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
