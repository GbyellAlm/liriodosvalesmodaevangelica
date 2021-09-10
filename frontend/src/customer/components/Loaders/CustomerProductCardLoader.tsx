import ContentLoader from "react-content-loader";
import { generateList } from "../../../core/utils/list";

const ProductCardLoader = () => {
    const loaderItems = generateList(5);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={2}
                    width={251}
                    height={319}
                    viewBox="0 0 251 319"
                    className="m-t-25"
                    backgroundColor="#fafafa"
                    foregroundColor="#f6f6f6"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="251" height="319" />
                </ContentLoader>
            ))}
        </>
    )
}

export default ProductCardLoader;
