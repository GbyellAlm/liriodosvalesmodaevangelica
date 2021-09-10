import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

type Props = {
    path: string;
    children: React.ReactNode;
}

const PrivateRoute = ({ path, children }: Props) => {
    return (
        <Route
            path={path}
            render={({ location }) =>
                isAuthenticated() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin/auth/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
