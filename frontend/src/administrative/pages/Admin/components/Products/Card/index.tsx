import OldProductPrice from '../../../../../../core/components/OldProductPrice';
import ProductPrice from '../../../../../../core/components/ProductPrice';
import './styles.scss';

const Card = () => {
    return (
        <div className="base-container b-r-10 b-s-1-10 admin-product-card-container">
            <div className="row">
                <div className="col-2 text-center border-right p-b-t-15">
                    <img src="https://i.imgur.com/mdsiTFr.jpeg" alt="Produto teste" className="admin-card-product-image" />
                </div>
                <div className="col-7 p-b-t-15 p-l-r-15">
                    <h3 className="f-s-16 f-w-600 admin-card-product-name">
                        Bíblia X
                    </h3>
                    <OldProductPrice price={40.5} />
                    <ProductPrice price={30.5} />
                    <p className="c-9e9e9e f-s-14">
                        em até 4x de R$ 26,25 s/ juros no cartão
                    </p>
                    <p className="c-9e9e9e f-s-14 pt-1 admin-card-product-description">
                        Bíblia Sagrada, com a linguagem na versão ARC (Revista Corrigida) de João Ferreira de Almeida. Sendo a versão mais utilizada pelos evangélicos do Brasil. Com sua fidelidade traduzida dos textos originais pelo missionário português João Ferreira de Almeida, esta obra tem como destaque sua linguagem elegante e culta. Agora a mais nova edição da Casa Publicadora Paulista, apresentamos a vocês a Bíblia com Espaço para Anotações Pautados, com diferenciais exclusivos e também muito procurados, a bíblia com espaço para anotações contém Harpa, Corinhos e Índice lateral.
                    </p>
                </div>
                <div className="col-3 p-b-t-28 p-l-r-15">
                    <button type="button" className="btn btn-outline-secondary btn-block b-r-10 mb-4 f-s-14 btn-edit">Editar</button>
                    <button type="button" className="btn btn-outline-danger btn-block b-r-10 f-s-14">Excluir</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
