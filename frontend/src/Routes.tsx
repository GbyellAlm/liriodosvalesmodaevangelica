import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/ProductsByCategory/Home';
import ProductDetails from './pages/ProductsByCategory/components/ProductDetails';
import ListOfProductsByCategory from './pages/ProductsByCategory';
import About from './pages/About';
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
            <Route path="/products/:prodId">
                <ProductDetails />
            </Route>
            <Route path="/category/:catId">
                <ListOfProductsByCategory />
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