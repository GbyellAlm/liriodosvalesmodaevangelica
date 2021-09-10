import { generateList } from "../../../../../core/utils/list";
import ContentLoader from "react-content-loader";

const AdminProductCardLoader = () => {
    const loaderItems = generateList(4);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={2}
                    width={1109}
                    height={152}
                    viewBox="0 0 1109 152"
                    className="m-b-15"
                    backgroundColor="#f2f2f2"
                    foregroundColor="#eaebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="1109" height="152" />
                </ContentLoader>
            ))}
        </>
    )
}

export default AdminProductCardLoader;
