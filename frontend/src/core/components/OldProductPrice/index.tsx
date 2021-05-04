type Props = {
    price: number;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price);
}

const OldProductPrice = ({ price }: Props) => (
    <div className="d-flex f-s-12 new-f-s-14">
        <span className="p-r-3 c-9e9e9e"><s>De: R$</s></span>
        <p className="c-9e9e9e"><s>{formatPrice(price)}</s></p>
    </div>
);

export default OldProductPrice;
