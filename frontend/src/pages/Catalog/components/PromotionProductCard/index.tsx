import './styles.scss';
import productsOnSale from '../../../../core/assets/images/biblia-da-mulher-sabia-lilas.png';

const PromotionProductCard = () => {
    return (
        <div className="product-card-container border-1-solid-e5e5e5 border-radius-10">
            <img src={productsOnSale} alt=""/>
            <div className="product-info-container">
                <p className="product-name font-size-14 font-w-600">Bíblia de Estudo da Mulher Sábia (Lilás)</p>
                <div className="old-product-price-container">
                    <span className="product-currency"><s>De: R$</s></span>
                    <p><s>95,00</s></p>
                </div>
                <div className="product-price-container">
                    <span className="product-currency font-size-14 font-w-600">R$</span>
                    <p className="font-size-14 font-w-600">85,00</p>
                </div>
                <p className="product-payment-condition font-size-14">4x de R$ 21,25 sem juros no cartão</p>
            </div>
        </div>
    )
}

export default PromotionProductCard;
