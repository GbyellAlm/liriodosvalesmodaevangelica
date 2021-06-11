import './styles.scss';

type Props = {
    imgUrl: string;
}

const ProductImages = ({ imgUrl }: Props) => (
    <div className="carousel-item active" data-bs-interval="9000">
        <img src={imgUrl} className="d-block w-100 img-fluid" alt="..." />
    </div>
)

export default ProductImages;
