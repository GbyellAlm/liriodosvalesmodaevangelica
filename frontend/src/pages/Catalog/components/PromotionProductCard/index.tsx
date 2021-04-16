import productsOnSale from '../../../../core/assets/images/biblia-da-mulher-sabia-lilas.png';
import './styles.scss';

const PromotionProductCard = () => {
    return (
        <div className="product-card-container border-1-solid-e5e5e5 border-radius-10">
            <img src={productsOnSale} alt=""/>
            <div className="product-info-container">
                <p className="p-d-product-name font-size-14 font-w-600">Bíblia de Estudo da Mulher Sábia (Lilás)</p>
                <div className="d-flex padding-t-3-point-5">
                    <span className="p-d-product-currency color-9e9e9e font-size-12"><s>De: R$</s></span>
                    <p className="color-9e9e9e font-size-12"><s>95,00</s></p>
                </div>
                <div className="d-flex">
                    <span className="p-d-product-currency color-9e9e9e font-size-14 font-w-600">R$</span>
                    <p className="color-63c0e1 font-size-14 font-w-600">85,00</p>
                </div>
                <p className="color-9e9e9e font-size-12">4x de R$ 21,25 sem juros no cartão</p>
            </div>
        </div>
    )
}

export default PromotionProductCard;
