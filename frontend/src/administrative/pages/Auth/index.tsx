import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import './styles.scss';

const Authentication = () => (
    <div>
        <Switch>
            <Route path="/admin/auth/login">
                <Login />
            </Route>
        </Switch>
    </div>
);

export default Authentication
