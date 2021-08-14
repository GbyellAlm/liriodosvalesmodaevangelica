import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './core/utils/history';
import CustomerNavbar from './customer/components/Navbar';
import Home from './customer/pages/Home';
import ProductDetails from './customer/components/ProductDetails';
import ProductsByCategory from './customer/pages/ProductsByCategory';
import About from './customer/pages/About';
import CustomerFooter from './customer/components/Footer';
import AdminNavbar from './administrative/components/Navbar';
import Auth from './administrative/pages/Auth';
import PrivateRoute from './core/components/Routes/PrivateRoute';
import Admin from './administrative/pages/Admin';
import AdminFooter from './administrative/components/Footer';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" exact>
                <CustomerNavbar />
                <Home />
                <CustomerFooter />
            </Route>

            <Route path="/products/:productId">
                <CustomerNavbar />
                <ProductDetails />
                <CustomerFooter />
            </Route>

            <Route path="/category/:catId">
                <CustomerNavbar />
                <ProductsByCategory />
                <CustomerFooter />
            </Route>

            <Route path="/about">
                <CustomerNavbar />
                <About />
                <CustomerFooter />
            </Route>

            <Redirect from="/admin/auth" to="/admin/auth/login" exact />
            <Route path="/admin/auth">
                <AdminNavbar />
                <Auth />
                <AdminFooter />
            </Route>

            <Redirect from="/admin" to="/admin/products" exact />
            <PrivateRoute path="/admin">
                <AdminNavbar />
                <Admin />
                <AdminFooter />
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;
