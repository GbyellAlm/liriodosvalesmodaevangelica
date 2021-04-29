import './styles.scss';

type Props = {
    title: string;
} 

const PageSectionTitle = ({ title }: Props) => {
    return (
        <div className="m-b-25 b-b-1-s-e5e5e5">
            <h6 className="f-w-600">{ title }</h6>
        </div>
    )
}

export default PageSectionTitle;
