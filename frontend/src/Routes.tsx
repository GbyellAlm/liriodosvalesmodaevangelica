import history from './core/utils/history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import CustomerNavbar from './customer/components/Navbar';
import Homepage from './customer/pages/Home';
import ProductDetails from './customer/components/ProductDetails';
import ProductsByCategory from './customer/pages/ProductsByCategory';
import AboutUs from './customer/pages/AboutUs';
import ProductSearch from './customer/pages/ProductSearch';
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
                <Homepage />
                <CustomerFooter />
            </Route>

            <Route path="/product/:productId">
                <CustomerNavbar />
                <ProductDetails />
                <CustomerFooter />
            </Route>

            <Route path="/category/:catId">
                <CustomerNavbar />
                <ProductsByCategory />
                <CustomerFooter />
            </Route>

            <Route path="/about-us">
                <CustomerNavbar />
                <AboutUs />
                <CustomerFooter />
            </Route>

            <Route path="/search/:productName">
                <CustomerNavbar />
                <ProductSearch />
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
