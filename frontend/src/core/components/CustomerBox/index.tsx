import './styles.scss';

type Props = {
    children: React.ReactNode;
} 

const CustomerBox = ({children}: Props) => {
    return (
        <div className="padding-25">
            <div className="homepage-content border-radius-10 box-shadow-10">
                {children}
            </div>
        </div>
    )
}

export default CustomerBox;
