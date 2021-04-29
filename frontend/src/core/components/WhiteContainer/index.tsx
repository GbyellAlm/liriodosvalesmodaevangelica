import './styles.scss';

type Props = {
    children: React.ReactNode;
} 

const BaseContainer = ({ children }: Props) => {
    return (
        <div className="base-container b-r-10 b-s-1-10">
            { children }
        </div>
    )
}

export default BaseContainer;
