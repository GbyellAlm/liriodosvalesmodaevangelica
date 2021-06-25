import './styles.scss';

type Props = {
    url: string;
}

const ProductImages = ({ url }: Props) => (
    <div className="carousel-item active" data-bs-interval="9000">
        <img src={url} className="d-block w-100 img-fluid" alt="Foto do produto" />
    </div>
)

export default ProductImages;
