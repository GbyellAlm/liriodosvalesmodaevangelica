import './styles.scss';
import CustomerBox from '../../core/components/CustomerBox';
import ProductCard from '../components/ProductCard';
import PromotionProductCard from '../components/PromotionProductCard';

const Homepage = () => {
    return (
        <CustomerBox>
            <div className="padding-25">
                <div className="border-bottom-1-solid-e5e5e5">
                    <h6 className="font-weight-600">PRODUTOS EM DESTAQUE</h6>
                </div>
                <div className="product-layout">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className="padding-l-r-b-25">
                <div className="border-bottom-1-solid-e5e5e5">
                    <h6 className="font-weight-600">PROMOÇÕES</h6>
                </div>
                <div className="product-layout">
                    <PromotionProductCard />
                    <PromotionProductCard />
                    <PromotionProductCard />
                    <PromotionProductCard />
                    <PromotionProductCard />
                </div>
            </div>
        </CustomerBox>
    )
}

export default Homepage;
