type Props = {
    sizes: string;
}

const ProductSizes = ({ sizes }: Props) => {
    return (
        <div className="d-flex f-s-14">
            <span className="c-9e9e9e p-r-3">Tamanhos:</span>
            <p className="c-63c0e1">{sizes}</p>
        </div>
    )
}

export default ProductSizes;
