import ContentLoader from "react-content-loader";

const ProductImageLoader = () => (
    <ContentLoader
        speed={2}
        viewBox="0 0 405 431"
        className="py-3"
        backgroundColor="#faf9f9"
        foregroundColor="#f5f5f5"
        style={{ width: 405, height: '100%' }}
    >
        <rect x="0" y="0" rx="0" ry="0" width="405" height="431" />
    </ContentLoader>
)

export default ProductImageLoader;
