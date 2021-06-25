import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const AuthCard = ({ title, children }: Props) => {
    return (
        <div className="auth-card-container">
            <div className="base-container b-r-10 b-s-1-10 auth-card">
                <h4 className="text-center">{title}</h4>
                <p className="text-center f-s-14">Bem vindo!</p>
                {children}
            </div>
        </div>
    )
}

export default AuthCard;
