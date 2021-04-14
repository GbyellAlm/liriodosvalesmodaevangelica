import CustomerBox from '../../../core/components/BaseBox';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PromotionProductCard from '../components/PromotionProductCard';
import './styles.scss';

const Homepage = () => {
    return (
        <CustomerBox>
            <div className="homepage-container">
                <div className="border-bottom-1-solid-e5e5e5">
                    <h6 className="font-size-16 font-w-600">PRODUTOS EM DESTAQUE</h6>
                </div>
                <div className="product-layout">
                    <Link to="/1"><ProductCard /></Link>
                    <Link to="/2"><ProductCard /></Link>
                    <Link to="/3"><ProductCard /></Link>
                    <Link to="/4"><ProductCard /></Link>
                    <Link to="/5"><ProductCard /></Link>
                    <Link to="/6"><ProductCard /></Link>
                    <Link to="/7"><ProductCard /></Link>
                    <Link to="/8"><ProductCard /></Link>
                    <Link to="/9"><ProductCard /></Link>
                    <Link to="/10"><ProductCard /></Link>
                </div>
                <div className="padding-t-25 border-bottom-1-solid-e5e5e5">
                    <h6 className="font-size-16 font-w-600">PROMOÇÕES</h6>
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
