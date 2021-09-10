import ContentLoader from "react-content-loader";

const StorePhotoLoader = () => (
    <ContentLoader
        speed={2}
        width={700}
        height={300}
        viewBox="0 0 700 300"
        backgroundColor="#fafafa"
        foregroundColor="#f6f6f6"
    >
        <rect x="0" y="0" rx="0" ry="0" width="700" height="300" />
    </ContentLoader>
)

export default StorePhotoLoader;
