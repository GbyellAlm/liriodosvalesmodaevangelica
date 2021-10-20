type Props = {
    sizes: string;
}

const ProductSizes = ({ sizes }: Props) => {
    return (
        <div className="m-t-15 d-flex">
            <span className="f-w-600 c-9e9e9e">Tamanhos:&nbsp;</span>
            <p className="f-w-700 c-63c0e1">{sizes}</p>
        </div>
    )
}

export default ProductSizes;
