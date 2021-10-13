import ContentLoader from "react-content-loader";

const StorePhotoLoader = () => (
    <ContentLoader
        speed={2}
        width={700}
        height={300}
        viewBox="0 0 700 300"
        backgroundColor="#faf9f9"
        foregroundColor="#f5f5f5"
    >
        <rect x="0" y="0" rx="0" ry="0" width="700" height="300" />
    </ContentLoader>
)

export default StorePhotoLoader;
