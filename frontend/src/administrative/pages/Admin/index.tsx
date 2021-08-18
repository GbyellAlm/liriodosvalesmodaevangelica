import Sidebar from './components/Sidebar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import './styles.scss';

const Admin = () => (
    <div className="admin-container">
        <Sidebar />
        <div className="m-25 admin-content">
            <Switch>
                <Route path="/admin/products">
                    <Products />
                </Route>
                <Route path="/admin/about">
                    <h1>Sobre nós</h1>
                </Route>
            </Switch>
        </div>
    </div>
)

export default Admin;
