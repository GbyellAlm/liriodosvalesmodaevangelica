import { Product } from '../../../../../core/types/Product';
import ProductImages from './components/ProductImages';
import './styles.scss';

type Props = {
    product?: Product;
}

const ProductImagesCarousel = ({ product }: Props) => {
    const images = product?.images;

    return (
        <div className="carousel slide" id="productImages" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images?.map(image => <ProductImages imgUrl={image.url} />)}
            </div>
            <button type="button" className="carousel-control-prev" data-bs-target="#productImages" data-bs-slide="prev">
                <span className="f-w-700 carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button type="button" className="carousel-control-next" data-bs-target="#productImages" data-bs-slide="next">
                <span className="f-w-700 carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ProductImagesCarousel;
