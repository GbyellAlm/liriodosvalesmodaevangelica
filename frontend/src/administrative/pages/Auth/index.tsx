import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const Auth = () => (
    <div>
        <Switch>
            <Route path="/admin/auth/login">
                <Login />
            </Route>
        </Switch>
    </div>
);

export default Auth;
