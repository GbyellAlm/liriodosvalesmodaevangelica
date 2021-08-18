type Props = {
    price: number;
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price);
}

const OldProductPrice = ({ price }: Props) => (
    <div className="d-flex c-9e9e9e f-s-14">
        <span><s>De: R$&nbsp;</s></span>
        <span><s>{formatPrice(price)}</s></span>
    </div>
);

export default OldProductPrice;
