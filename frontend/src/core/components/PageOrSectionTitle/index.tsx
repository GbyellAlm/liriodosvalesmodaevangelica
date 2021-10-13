import './styles.scss';

type Props = {
    title: string;
}

const PageOrSectionTitle = ({ title }: Props) => {
    return (
        <div className="b-b-1-s-e5e5e5">
            <h1 className="f-w-700 f-s-18 title">{title}</h1>
        </div>
    )
}

export default PageOrSectionTitle;
