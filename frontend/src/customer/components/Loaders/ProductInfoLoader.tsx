import ContentLoader from "react-content-loader";

const ProductInfoLoader = () => (
    <ContentLoader
        speed={2}
        width="100%"
        height={150}
        viewBox="0 0 100% 150"
        backgroundColor="#faf9f9"
        foregroundColor="#f5f5f5"
    >
        <rect x="0" y="0" rx="0" ry="0" width="550" height="18" />
        <rect x="0" y="37" rx="0" ry="0" width="94" height="16" />
        <rect x="0" y="62" rx="0" ry="0" width="74" height="20" />
        <rect x="0" y="92" rx="0" ry="0" width="301" height="18" />
        <rect x="0" y="134" rx="0" ry="0" width="184" height="16" />
    </ContentLoader>
)

export default ProductInfoLoader;
