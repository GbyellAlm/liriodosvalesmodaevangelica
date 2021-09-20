import { Product } from 'core/types/Product';
import OldProductPrice from 'core/components/OldProductPrice';
import ProductPrice from 'core/components/ProductPrice';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    product: Product;
    onRemove: (productId: number) => void;
}

const Card = ({ product, onRemove }: Props) => {
    return (
        <div className="base-container b-r-10 b-s-1-10 admin-product-card-container">
            <div className="row">
                <div className="col-2 text-center border-right p-b-t-15">
                    <img src={product.imageURL} alt={product.name} className="img-fluid admin-product-image" />
                </div>
                <div className="col-7 p-b-t-15 p-l-r-15">
                    <h3 className="f-s-16 f-w-600 admin-product-name" title={product.name}>
                        {product.name}
                    </h3>
                    {product.promotionalPrice !== null && <OldProductPrice price={product.price} />}
                    <ProductPrice price={product.promotionalPrice !== null ? product.promotionalPrice : product.price} />
                    <p className="c-9e9e9e">
                        {product.paymentTerms}
                    </p>
                    <p className="pt-1 c-9e9e9e admin-product-description">
                        {product.description}
                    </p>
                </div>
                <div className="col-3">
                    <Link to={`/admin/products/${product.id}`} type="button" className="btn btn-outline-secondary btn-block mt-3 b-r-10 btn-edit">
                        EDITAR
                    </Link>
                    <button type="button" className="btn btn-outline-danger btn-block b-r-10" onClick={() => onRemove(product.id)}>
                        EXCLUIR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;
