import { generateList } from "core/utils/list";
import ContentLoader from "react-content-loader";

const ProductCardLoader = () => {
    const loaderItems = generateList(5);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={2}
                    viewBox="0 0 251 315"
                    className="p-t-25"
                    backgroundColor="#faf9f9"
                    foregroundColor="#f5f5f5"
                    style={{ width: '100%', height: '100%' }}
                >
                    <rect x="0" y="0" rx="10" ry="10" width="251" height="315" />
                </ContentLoader>
            ))}
        </>
    )
}

export default ProductCardLoader;
