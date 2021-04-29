type Props = {
    price: number;
}

const formatPrice = (price : number) => {
    return new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(price);
}

const ProductPrice = ({ price }: Props) => (
    <div className="d-flex f-w-700 new-f-s">
        <span className="p-r-3 c-9e9e9e">R$</span>
        <p className="c-63c0e1">{formatPrice(price)}</p>
    </div>
);

export default ProductPrice;
