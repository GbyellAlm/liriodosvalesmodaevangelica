import normalProducts from '../../../../core/assets/images/biblia-da-mulher-sabia-rosa-escuro.png';
import './styles.scss';

const ProductCard = () => {
    return (
        <div className="product-card-container border-1-solid-e5e5e5 border-radius-10">
            <img src={normalProducts} alt=""/>
            <div className="product-info-container">
                <p className="p-c-product-name font-size-14 font-w-600">Bíblia de Estudo da Mulher Sábia (Rosa Escuro)</p>
                <div className="d-flex padding-t-3-point-5 visibility-h">
                    <span className="p-c-product-currency color-9e9e9e font-size-12"><s>De R$</s></span>
                    <p className="color-9e9e9e font-size-12"><s>95,00</s></p>
                </div>
                <div className="d-flex">
                    <span className="p-c-product-currency color-9e9e9e font-size-14 font-w-600">R$</span>
                    <p className="color-63c0e1 font-size-14 font-w-600">85,00</p>
                </div>
                <p className="color-9e9e9e font-size-12">4x de R$ 21,25 sem juros no cartão</p>
            </div>
        </div>
    )
}

export default ProductCard;
