import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { makeLogin } from '../../../../../core/utils/request';
import { saveSessionData } from '../../../../../core/utils/auth';
import { useHistory } from 'react-router-dom';
import AuthCard from '../Card/';
import './styles.scss';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
                history.push('/admin');
            })
            .catch(() => {
                setHasError(true);
            });
    }

    return (
        <AuthCard title="LOGIN">
            {hasError && (
                <div className="alert alert-danger">
                    <p className="f-s-14"> Usuário ou senha inválidos!</p>
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username" className="form-label f-s-14">E-mail</label>
                <input
                    type="email"
                    className="form-control b-r-10 f-s-14"
                    id="username"
                    name="username"
                    ref={register({ required: true })}
                />
                <label htmlFor="password" className="form-label m-t-15 f-s-14">Senha</label>
                <input
                    type="password"
                    className="form-control b-r-10 f-s-14"
                    id="password"
                    name="password"
                    ref={register({ required: true })}
                />
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg b-r-10 text-white login-submit">LOGAR</button>
                </div>
            </form>
        </AuthCard>
    )
}

export default Login;
