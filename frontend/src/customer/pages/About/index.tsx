import { useEffect, useState } from 'react';
import { About } from '../../../core/types/About';
import { makeRequest } from '../../../core/utils/request';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../../core/components/PageOrSectionTitle';
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
        <div className="m-25 base-container m-h-485 b-r-10 b-s-1-10 p-25">
            <Helmet title="Sobre nós · Lírio dos vales - Moda Evangélica" />
            <PageOrSectionTitle title="SOBRE NÓS" />
            <div className="store-photo-container">
                <img src={aboutResponse?.imgUrl} className="img-fluid store-image" alt="Fachada da loja" />
            </div>
            <div className="f-s-14 store-description-container">
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )
}

export default AboutUs;
