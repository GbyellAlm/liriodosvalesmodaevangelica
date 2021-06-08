import { useEffect, useState } from 'react';
import { AboutUs as About} from '../../core/types/AboutUs';
import { makeRequest } from '../../core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../core/components/PageOrSectionTitle';
import './styles.scss';

const AboutUs = () => {
    const [aboutResponse, setAboutResponse] = useState<About>();

    useEffect(() => {
        makeRequest({ url: '/about-us/1' })
            .then(response => setAboutResponse(response.data));
    }, []);

    let description = ""
    if (aboutResponse?.description !== undefined) {
        description = aboutResponse?.description;
    }

    return (
        <div className="base-container m-h-487 b-r-10 b-s-1-10 m-25 p-25">
            <Helmet title="Sobre nós | Lírio dos vales - Moda Evangélica" />
            <PageOrSectionTitle title="SOBRE NÓS" />
            <div className="store-image-container">
                <img src={aboutResponse?.imgUrl} alt="Fachada da loja" className="img-fluid store-image"/>
            </div>
            <div className="store-description-container f-s-14">
                <p dangerouslySetInnerHTML={{ __html: description }}/>
            </div>
        </div>
    )
}

export default AboutUs;
