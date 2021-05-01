import PageSectionTitle from '../../../core/components/PageSectionTitle';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <div className="base-container b-r-10 b-s-1-10 m-25 p-25">
            <div>
                <div className="featured-products-container">
                    <PageSectionTitle title="PRODUTOS EM DESTAQUE" />
                </div>
                <div className="container-promotions">
                    <PageSectionTitle title="PROMOÇÕES" />
                </div>
            </div> 
        </div>
    )
}

export default Home;
