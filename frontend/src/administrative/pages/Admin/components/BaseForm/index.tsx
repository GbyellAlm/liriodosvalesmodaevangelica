import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../../../../core/components/PageOrSectionTitle';
import './styles.scss';

type Props = {
    children: React.ReactNode;
}

const BaseForm = ({ children }: Props) => {
    const history = useHistory();

    const handleCancel = () => {
        history.push('../');
    }

    return (
        <div className="base-container b-r-10 b-s-1-10 p-25">
            <Helmet title="Admin: Cadastrar novo produto | Lírio dos Vales - Moda Evangélica" />
            <PageOrSectionTitle title="CADASTRAR NOVO PRODUTO" />
            {children}
            <div className="col-12 baseform-actions">
                <button type="button" className="btn btn-outline-danger mr-3 b-r-10" onClick={handleCancel}>CANCELAR</button>
                <button type="submit" className="btn btn-primary b-r-10 text-white">CADASTRAR</button>
            </div>
        </div>
    )
}

export default BaseForm;
