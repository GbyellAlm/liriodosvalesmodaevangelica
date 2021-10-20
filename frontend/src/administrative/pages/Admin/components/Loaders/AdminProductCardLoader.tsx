import { generateList } from "../../../../../core/utils/list";
import ContentLoader from "react-content-loader";

const AdminProductCardLoader = () => {
    const loaderItems = generateList(4);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    speed={2}
                    viewBox="0 0 1139 180"
                    className="mb-3"
                    backgroundColor="#fafafa"
                    foregroundColor="#f6f6f6"
                    style={{ width: '100%', height: '100%' }}
                >
                    <rect x="0" y="0" rx="10" ry="10" width="1139" height="180" />
                </ContentLoader>
            ))}
        </>
    )
}

export default AdminProductCardLoader;
