import { Product } from '../../../../../core/types/Product';
import ProductImages from './components/ProductImages';
import './styles.scss';

type Props = {
    product?: Product;
}

const ProductImagesCarousel = ({ product }: Props) => {
    const images = product?.images;

    return (
        <div id="productImages" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images?.map(image => <ProductImages imgUrl={image.url} />)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productImages" data-bs-slide="prev">
                <span className="carousel-control-prev-icon f-w-700" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productImages" data-bs-slide="next">
                <span className="carousel-control-next-icon f-w-700" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ProductImagesCarousel;
