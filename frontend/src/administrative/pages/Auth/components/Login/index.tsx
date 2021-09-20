import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';
import AuthCard from '../Card';
import { Helmet } from 'react-helmet';
import './styles.scss';

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from: string
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();

    const [hasError, setHasError] = useState(false);

    const history = useHistory();

    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/admin" } };

    const onSubmit = (data: FormState) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
                history.push(from);
            })
            .catch(() => { setHasError(true); });
    }

    return (
        <AuthCard title="LOGIN">
            <Helmet title="Administrativo: Login | Lírio dos Vales - Moda Evangélica" />
            {hasError && (
                <div className="alert alert-danger">
                    <p className="text-center">E-mail e/ou senha incorretos</p>
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username" className="form-label">E-mail:</label>
                <input
                    type="email"
                    className={`form-control b-r-10 ${errors.username ? 'is-invalid' : ''}`}
                    id="username"
                    name="username"
                    ref={register({
                        required: "Campo obrigatório",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "E-mail inválido"
                        }
                    })}
                />
                {errors.username && (
                    <div className="invalid-feedback d-block">
                        {errors.username.message}
                    </div>
                )}

                <label htmlFor="password" className="form-label m-t-16">Senha:</label>
                <input
                    type="password"
                    className={`form-control b-r-10 ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    ref={register({ required: "Campo obrigatório" })}
                />
                {errors.password && (
                    <div className="invalid-feedback d-block">
                        {errors.password.message}
                    </div>
                )}

                <div className="d-grid">
                    <button className="btn btn-lg btn-primary b-r-10 text-white login-submit" type="submit">
                        ENTRAR
                    </button>
                </div>
            </form>
        </AuthCard>
    )
}

export default Login;
