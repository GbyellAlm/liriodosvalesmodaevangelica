import './styles.scss';
import productsOnSale from '../../../core/assets/images/biblia-da-mulher-sabia-lilas.png';

const PromotionProductCard = () => {
    return (
        <div className="product-card border-radius-10">
            <img src={productsOnSale} alt="" />
            <div className="product-info">
                <p className="product-name font-weight-600">Bíblia de Estudo da Mulher Sábia (Lilás)</p>
                <div className="product-promotion-price-container-2">
                    <span className="product-currency"><s>De: R$</s></span>
                    <p><s>95,00</s></p>
                </div>
                <div className="product-price-container">
                    <span className="product-currency font-weight-600 font-size-14">R$</span>
                    <p className="font-weight-600 font-size-14">85,00</p>
                </div>
                <p className="product-payment-condition font-size-14">4x de R$ 21,25 sem juros no cartão</p>
            </div>
        </div>
    )
}

export default PromotionProductCard;
