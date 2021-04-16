import CustomerBox from '../../../../core/components/BaseBox';
import { useHistory, useParams } from 'react-router-dom';
import ProductImagesCarousel from './ProductImagesCarousel';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const history = useHistory();
    const backButton = () => {
        history.push('../');
    }

    const { productId } = useParams<ParamsType>();
    console.log(productId);

    return (
        <CustomerBox>
            <div className="product-details-container">
                <div className="row">
                    <button type="button" onClick={backButton} className="btn btn-sm btn-primary text-white back-button">Voltar</button>
                </div>
                <div className="row padding-t-25">
                    <div className="col-lg-6 product-images-container d-flex justify-content-center border-1-solid-e5e5e5 border-radius-10">
                        <ProductImagesCarousel />
                    </div>
                    <div className="col-lg-6">
                        <h6 className="font-size-16 font-w-600">Bíblia de Estudo da Mulher Sábia (Rosa Escuro)</h6>
                            <div className="d-flex visibility-h">
                                <span className="p-d-product-currency color-9e9e9e font-size-12"><s>De: R$</s></span>
                                <p className="color-9e9e9e font-size-12"><s>95,00</s></p>
                            </div>
                            <div className="d-flex">
                                <span className="p-d-product-currency color-9e9e9e font-size-16 font-w-700">R$</span>
                                <p className="color-63c0e1 font-size-16 font-w-700">85,00</p>
                            </div>
                            <p className="color-9e9e9e font-size-14">4x de R$ 21,25 sem juros no cartão</p> 
                    </div>
                </div>
                <div className="row product-description border-1-solid-e5e5e5 border-radius-10">
                    <h6 className="font-size-16 font-w-600">DESCRIÇÃO DO PRODUTO</h6>
                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat aliquet lacus, et aliquam velit maximus a. Vivamus quis sollicitudin arcu, vel euismod est. Nullam ultrices sapien sit amet diam rhoncus, vitae efficitur mauris bibendum.</p>
                </div>
            </div>
        </CustomerBox>
    )
}

export default ProductDetails;
