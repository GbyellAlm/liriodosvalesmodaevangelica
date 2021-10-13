import { Product } from 'core/types/Product';
import OldProductPrice from 'core/components/OldProductPrice';
import ProductPrice from 'core/components/ProductPrice';
import './styles.scss';

type Props = {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className="b-1-s-e5e5e5 b-r-10 customer-product-card-container">
            <img src={product.imageURL} alt={product.name} className="customer-card-product-image" />
            <div className="customer-product-card-info">
                <h3 className="f-s-16 f-w-600 customer-card-product-name" title={product.name}>
                    {product.name}
                </h3>
                {product.promotionalPrice !== null && <OldProductPrice price={product.price} />}
                <ProductPrice price={product.promotionalPrice !== null ? product.promotionalPrice : product.price} />
                <p className="f-s-14 c-9e9e9e">
                    {product.paymentTerms}
                </p>
            </div>
        </div>
    )
}

export default ProductCard;
