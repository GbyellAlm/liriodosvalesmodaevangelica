import './styles.scss';

type Props = {
    price: number;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price);
}

const OldProductPrice = ({ price }: Props) => (
    <div className="d-flex old-product-price-container">
        <span><s>De: R$&nbsp;</s></span>
        <span><s>{formatPrice(price)}</s></span>
    </div>
);

export default OldProductPrice;
