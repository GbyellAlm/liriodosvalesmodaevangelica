import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from 'core/types/Product';
import { makeRequest } from 'core/utils/request';
import { Helmet } from 'react-helmet';
import ProductImageLoader from '../Loaders/ProductImageLoader';
import ProductInfoLoader from '../Loaders/ProductInfoLoader';
import OldProductPrice from 'core/components/OldProductPrice';
import ProductPrice from 'core/components/ProductPrice';
import ProductSizes from 'core/components/ProductSizes';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();

    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    const [productResponse, setProductResponse] = useState<Product>();

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/products/${productId}` })
            .then(response => setProductResponse(response.data))
            .finally(() => { setIsLoading(false); });
    }, [productId]);

    let description = ""
    if (productResponse?.description !== undefined) {
        description = productResponse?.description;
    }

    return (
        <div className="m-25 base-container m-h-484 b-r-10 b-s-1-10 p-25">
            <Helmet title={productResponse?.name + " | Lírio dos Vales - Moda Evangélica"} />
            <div>
                <button type="button" className="btn btn-sm btn-primary text-white back-button" onClick={history.goBack}>
                    Voltar
                </button>
            </div>
            <div className="row">
                <div className="col-6 d-flex b-1-s-e5e5e5 b-r-10 justify-content-center">
                    {isLoading ? <ProductImageLoader /> : (
                        <>
                            <img src={productResponse?.imageURL} alt={productResponse?.name} className="product-image" />
                        </>
                    )}
                </div>
                <div className="col-6 product-details">
                    {isLoading ? <ProductInfoLoader /> : (
                        <>
                            <h1 className="product-name">
                                {productResponse?.name}
                            </h1>
                            {productResponse?.promotionalPrice !== null
                                && productResponse?.price
                                && <OldProductPrice price={productResponse?.price} />
                            }
                            {productResponse?.price
                                && <ProductPrice price={productResponse?.promotionalPrice !== null ? productResponse?.promotionalPrice : productResponse?.price} />
                            }
                            <p className="c-9e9e9e">
                                {productResponse?.paymentTerms}
                            </p>
                            {productResponse?.sizes !== null
                                && productResponse?.sizes
                                && <ProductSizes sizes={productResponse?.sizes} />
                            }
                        </>
                    )}
                </div>
            </div>
            <div className="product-description-container">
                <h2 className="product-description-title">Descrição do produto</h2>
                <div>
                    {isLoading ? <ProductDescriptionLoader /> : (
                        <>
                            <p dangerouslySetInnerHTML={{ __html: description }} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
