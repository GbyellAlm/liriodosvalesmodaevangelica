type Props = {
    price: number;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price);
}

const ProductPrice = ({ price }: Props) => (
    <div className="d-flex f-w-700">
        <span className="c-9e9e9e f-s-14">R$&nbsp;</span>
        <span className="c-63c0e1 f-s-16 new-f-s">{formatPrice(price)}</span>
    </div>
);

export default ProductPrice;
