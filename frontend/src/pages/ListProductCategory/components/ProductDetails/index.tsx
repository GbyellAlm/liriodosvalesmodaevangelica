import { useEffect, useState } from 'react';
import { makeRequest } from '../../../../core/utils/request';
import { useHistory, useParams } from 'react-router-dom';
import WhiteContainer from '../../../../core/components/WhiteContainer';
import ProductImagesCarousel from './ProductImagesCarousel';
import { Product } from '../../../../core/types/Product';
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
        makeRequest({url: `/products/${ productId }`})
        .then(response => setProduct(response.data))
    }, [productId]);
    
    const history = useHistory();
    const backButton = () => {
        history.push('../');
    }

    return (
        <WhiteContainer>
            <div className="product-details-container">
                <div className="row">
                    <button type="button" onClick={backButton} className="btn btn-sm btn-primary text-white f-s-12 back-button">Voltar</button>
                </div>
                <div className="row padding-t-25">
                    <div className="col-lg-6 d-flex justify-content-center b-r-10 b-1-s-e5e5e5 product-images-container">
                        <ProductImagesCarousel />
                    </div>
                    <div className="col-lg-6">
                        <h5 className="f-s-16 f-w-600">{product?.name}</h5>
                        {product?.promotionalPrice !== null && product?.price && <OldProductPrice price={product?.price}/>}
                        {product?.price && <ProductPrice price={product?.promotionalPrice !== null ? product?.promotionalPrice : product?.price}/>}
                        <p className="c-9e9e9e f-s-14">{product?.paymentTerms}</p>
                        <br />
                        {product?.sizes !== null && product?.sizes && <ProductSizes sizes={product?.sizes}/>}
                    </div>
                </div>
                <div className="row product-description b-r-10 b-1-s-e5e5e5">
                    <h5 className="f-w-600">Descrição do produto</h5>
                    <p className="f-s-14">{product?.description}</p>
                </div>
            </div>
        </WhiteContainer>
    )
}

export default ProductDetails;
