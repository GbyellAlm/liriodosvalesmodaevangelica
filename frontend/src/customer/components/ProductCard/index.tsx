import { Product } from '../../../core/types/Product';
import OldProductPrice from '../../../core/components/OldProductPrice';
import ProductPrice from '../../../core/components/ProductPrice';
import './styles.scss';

type Props = {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    const images = product.images;

    return (
        <div className="b-r-10 b-1-s-e5e5e5 product-card-container">
            <div>
                {images.map((image) => {
                    return image.mainImage === true && <img src={image.url} className="product-card-image" alt="Imagem principal" />;
                })}
            </div>
            <div className="product-card-info-container">
                <p className="product-name f-s-14 f-w-600" title={product.name}>{product.name}</p>
                {product.promotionalPrice !== null && <OldProductPrice price={product.price} />}
                <ProductPrice price={product.promotionalPrice !== null ? product.promotionalPrice : product.price} />
                <p className="c-9e9e9e f-s-12">{product.paymentTerms}</p>
            </div>
        </div>
    )
}

export default ProductCard;
