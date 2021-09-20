import './styles.scss';

type Props = {
    price: number;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price);
}

const ProductPrice = ({ price }: Props) => (
    <div className="d-flex">
        <span className="c-9e9e9e f-w-600">R$&nbsp;</span>
        <span className="c-63c0e1 product-price">{formatPrice(price)}</span>
    </div>
);

export default ProductPrice;
