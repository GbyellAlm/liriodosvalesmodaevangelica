import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/ListProductCategory/Home';
import ProductDetails from './pages/ListProductCategory/components/ProductDetails';
import ListOfProductsByCategory from './pages/ListProductCategory';
import AboutUs from './pages/About';
import Administrative from './pages/Admin';
import CustomerNavbar from './core/components/ClientNavbar';
import CustomerFooter from './core/components/ClientFooter';

const Routes = () => (
    <BrowserRouter>
        <CustomerNavbar />
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/products/:productId">
                <ProductDetails />
            </Route>
            <Route path="/category/:categoryId">
                <ListOfProductsByCategory />
            </Route>
            <Route path="/aboutUs" exact>
                <AboutUs />
            </Route>
            <Route path="/admin" exact>
                <Administrative />
            </Route>
        </Switch>
        <CustomerFooter />
    </BrowserRouter>
);

export default Routes;