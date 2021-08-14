type Props = {
    price: number;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price);
}

const OldProductPrice = ({ price }: Props) => (
    <div className="d-flex f-s-14">
        <span className="c-9e9e9e"><s>De: R$&nbsp;</s></span>
        <span className="c-9e9e9e"><s>{formatPrice(price)}</s></span>
    </div>
);

export default OldProductPrice;
