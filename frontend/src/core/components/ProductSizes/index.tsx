import './styles.scss';

type Props = {
    sizes: string;
}

const ProductSizes = ({ sizes }: Props) => {
    return (
        <div className="d-flex f-s-14 m-t-15">
            <span className="c-9e9e9e f-w-700">Tamanhos:&nbsp;</span>
            <p className="c-63c0e1">{sizes}</p>
        </div>
    )
}

export default ProductSizes;
