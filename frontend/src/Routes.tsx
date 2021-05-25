import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomerNavbar from './pages/ProductsByCategory/components/Navbar';
import HomePage from './pages/ProductsByCategory/Home';
import ProductDetails from './pages/ProductsByCategory/components/ProductDetails';
import ProductsByCategory from './pages/ProductsByCategory';
import About from './pages/About';
import Administrative from './pages/Admin';
import CustomerFooter from './pages/ProductsByCategory/components/Footer';

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
            <Route path="/category/:catId">
                <ProductsByCategory />
            </Route>
            <Route path="/about" exact>
                <About />
            </Route>
            <Route path="/admin" exact>
                <Administrative />
            </Route>
        </Switch>
        <CustomerFooter />
    </BrowserRouter>
);

export default Routes;