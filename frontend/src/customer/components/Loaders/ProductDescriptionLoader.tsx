import ContentLoader from "react-content-loader";

const ProductDescriptionLoader = () => (
    <ContentLoader
        speed={2}
        width="100%"
        height={81}
        viewBox="0 0 100% 81"
        backgroundColor="#faf9f9"
        foregroundColor="#f5f5f5"
    >
        <rect x="0" y="6" rx="0" ry="0" width="100%" height="18" />
        <rect x="0" y="33" rx="0" ry="0" width="100%" height="18" />
        <rect x="0" y="60" rx="0" ry="0" width="100%" height="18" />
    </ContentLoader>
)

export default ProductDescriptionLoader;
