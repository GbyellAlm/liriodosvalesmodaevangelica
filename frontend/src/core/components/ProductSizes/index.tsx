type Props = {
    sizes: string;
}

const ProductSizes = ({ sizes }: Props) => {
    return (
        <div className="d-flex m-t-16">
            <span className="c-9e9e9e f-w-600">Tamanhos:&nbsp;</span>
            <p className="c-63c0e1 f-w-700">{sizes}</p>
        </div>
    )
}

export default ProductSizes;
