import './styles.scss';

type Props = {
    title: string;
}

const PageOrSectionTitle = ({ title }: Props) => {
    return (
        <div className="b-b-1-s-e5e5e5">
            <h1 className="f-s-16 f-w-600 title">{title}</h1>
        </div>
    )
}

export default PageOrSectionTitle;
