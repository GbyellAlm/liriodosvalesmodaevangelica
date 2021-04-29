import WhiteContainer from '../../../core/components/WhiteContainer';
import PageSectionTitle from '../../../core/components/PageSectionTitle';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <WhiteContainer>
            <div className="p-25">
                <PageSectionTitle title="PRODUTOS EM DESTAQUE"/>
                <div className="product-layout">
                </div>
                <div className="p-t-25">
                    <PageSectionTitle title="PROMOÇÕES" />
                </div>
                <div className="product-layout">
                </div>     
            </div> 
        </WhiteContainer>
    )
}

export default Home;
