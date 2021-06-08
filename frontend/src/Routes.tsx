import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CustomerNavbar from './customer/components/Navbar';
import Home from './pages/ProductsByCategory/Home';
import ProductDetails from './pages/ProductsByCategory/components/ProductDetails';
import ProductsByCategory from './pages/ProductsByCategory';
import AboutUs from './pages/AboutUs';
import Admin from './pages/Admin';
import CustomerFooter from './customer/components/Footer';
import AdminNavbar from './admin/components/Navbar';
import AdminFooter from './admin/components/Footer';

const Routes = () => (
    <BrowserRouter>
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
            <Route path="/about-us">
                <CustomerNavbar />
                <AboutUs />
                <CustomerFooter />
            </Route>
            <Redirect from="/admin" to="/admin/products" exact/>
            <Route path="/admin">
                <AdminNavbar />
                <Admin />
                <AdminFooter />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;