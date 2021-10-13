import { useEffect, useState } from 'react';
import { About } from 'core/types/About';
import { makeRequest } from 'core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from 'core/components/PageOrSectionTitle';
import StorePhotoLoader from '../../components/Loaders/StorePhotoLoader';
import StoreDescriptionLoader from '../../components/Loaders/StoreDescriptionLoader';
import './styles.scss';

const AboutUs = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [aboutResponse, setAboutResponse] = useState<About>();

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: '/about-us/1' })
            .then(response => setAboutResponse(response.data))
            .finally(() => { setIsLoading(false); })
    }, []);

    let description = ""
    if (aboutResponse?.description !== undefined) {
        description = aboutResponse?.description;
    }

    return (
        <div className="m-25 m-h-484 base-container b-r-10 b-s-1-10 p-25">
            <Helmet title="Sobre nós | Lírio dos Vales - Moda Evangélica" />
            <PageOrSectionTitle title="Sobre nós" />
            <div className="store-photo-container">
                {isLoading ? <StorePhotoLoader /> : (
                    <img src={aboutResponse?.imageURL} alt="Fachada da loja" className="img-fluid" />
                )}
            </div>
            <div className="store-description-container">
                {isLoading ? <StoreDescriptionLoader /> : (
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                )}
            </div>
        </div>
    )
}

export default AboutUs;
