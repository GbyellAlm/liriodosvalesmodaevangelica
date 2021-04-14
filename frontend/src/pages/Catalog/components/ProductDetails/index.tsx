import './styles.scss';
import CustomerBox from '../../../../core/components/BaseBox';
import { useHistory, useParams } from 'react-router-dom';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const history = useHistory();
    const backButton = () => {
        history.push('../');
    }

    const { productId } = useParams<ParamsType>();
    console.log(productId);
    
    return (
        <CustomerBox>
            <div className="product-details-container">
                <div className="">
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div id="secondary-slider" className="splide">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    <li className="splide__slide">
                                        <img src="" />
                                    </li>
                                    <li className="splide__slide">
                                        <img src="" />
                                    </li>
                                    <li className="splide__slide">
                                        <img src="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
                <div className="">
                </div>
            </div>
        </CustomerBox>
    )
}

export default ProductDetails;
