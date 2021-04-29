import prodImgTest from '../../../../../core/assets/images/prod-img-test.png';
import prodImgTest2 from '../../../../../core/assets/images/prod-img-test2.png';
import './styles.scss';

const ProductImagesCarousel = () => {
    return (
        <div id="productImages" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="9000">
                    <img src={prodImgTest} className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="9000">
                    <img src={prodImgTest2} className="d-block w-100 img-fluid" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productImages" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productImages" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ProductImagesCarousel;
