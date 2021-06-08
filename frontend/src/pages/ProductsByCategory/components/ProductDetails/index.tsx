import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../../../core/types/Product';
import { makeRequest } from '../../../../core/utils/request';
import {Helmet} from 'react-helmet';
import ProductImagesCarousel from './ProductImagesCarousel';
import OldProductPrice from '../../../../core/components/OldProductPrice';
import ProductPrice from '../../../../core/components/ProductPrice';
import ProductSizes from '../../../../core/components/ProductSizes';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        makeRequest({ url: `/products/${productId}` })
            .then(response => setProduct(response.data))
    }, [productId]);

    const history = useHistory();

    let description = ""
    if (product?.description !== undefined) {
        description = product?.description;
    }

    return (
        <div className="base-container m-h-487 b-r-10 b-s-1-10 m-25 p-25">
            <Helmet title={product?.name + " | Lírio dos Vales - Moda Evangélica"}/>
            <div className="product-details-container">
                <div className="row">
                    <button type="button" onClick={history.goBack} className="btn btn-sm btn-primary text-white f-s-12 back-button">Voltar</button>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center b-r-10 b-1-s-e5e5e5 product-images-container">
                        <ProductImagesCarousel product={product} />
                    </div>
                    <div className="col-lg-6">
                        <h5 className="f-s-16 f-w-600">{product?.name}</h5>
                        {product?.promotionalPrice !== null && product?.price && <OldProductPrice price={product?.price} />}
                        {product?.price && <ProductPrice price={product?.promotionalPrice !== null ? product?.promotionalPrice : product?.price} />}
                        <p className="c-9e9e9e f-s-14">{product?.paymentTerms}</p>
                        <br />
                        {product?.sizes !== null && product?.sizes && <ProductSizes sizes={product?.sizes} />}
                    </div>
                </div>
                <div className="row product-description b-r-10 b-1-s-e5e5e5">
                    <h5 className="f-w-600">Descrição do produto</h5>
                    <div className="f-s-14">
                        <p dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
