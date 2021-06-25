type Props = {
    title: string;
}

const PageOrSectionTitle = ({ title }: Props) => {
    return (
        <div className="b-b-1-s-e5e5e5">
            <h6 className="f-w-600">{title}</h6>
        </div>
    )
}

export default PageOrSectionTitle;
