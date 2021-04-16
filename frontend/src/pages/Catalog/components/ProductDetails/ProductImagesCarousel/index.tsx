import testImage from '../../../../../core/assets/images/teste.png';
import smallTestImage from '../../../../../core/assets/images/biblia-da-mulher-sabia-rosa-escuro.png';
import './styles.scss';

const ProductImagesCarousel = () => {
    return (
        <div id="productImages" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="9000">
                    <img src={testImage} className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="9000">
                    <img src={smallTestImage} className="d-block w-100 img-fluid" alt="..." />
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
