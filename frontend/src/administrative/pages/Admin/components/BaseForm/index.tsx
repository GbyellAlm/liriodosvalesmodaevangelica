import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import PageOrSectionTitle from '../../../../../core/components/PageOrSectionTitle';
import './styles.scss';

type ParamsType = {
    productId: string;
}

type Props = {
    children: React.ReactNode;
}

const BaseForm = ({ children }: Props) => {
    const { productId } = useParams<ParamsType>();

    const isEditing = productId !== 'new-product';

    const history = useHistory();

    const handleCancel = () => {
        history.push('../');
    }

    return (
        <div className="base-container b-r-10 b-s-1-10 p-25">
            <Helmet title={isEditing ? "Administrativo: Editar produto · Lírio dos Vales - Moda Evangélica" : "Administrativo: Cadastrar um produto · Lírio dos Vales - Moda Evangélica"} />
            <PageOrSectionTitle title={isEditing ? "EDITAR PRODUTO" : "CADASTRAR UM PRODUTO"} />
            {children}
            <div className="base-form-actions">
                <button className="btn btn-outline-danger mr-3 b-r-10" type="button" onClick={handleCancel}>
                    CANCELAR
                </button>
                <button className="btn btn-primary b-r-10 text-white" type="submit">
                    {isEditing ? "SALVAR" : "CADASTRAR"}
                </button>
            </div>
        </div>
    )
}

export default BaseForm;
