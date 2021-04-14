import './styles.scss';

type Props = {
    children: React.ReactNode;
} 

const BaseBox = ({children}: Props) => {
    return (
        <div className="base-box-container border-radius-10 box-shadow-1-10">
            {children}
        </div>
    )
}

export default BaseBox;
