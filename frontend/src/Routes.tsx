import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Catalog/Home';
import Bibles from './pages/Catalog/Bibles';
import Female from './pages/Catalog/Female';
import Male from './pages/Catalog/Male';
import Books from './pages/Catalog/Books';
import Gifts from './pages/Catalog/Gifts';
import ProductDetails from './pages/Catalog/components/ProductDetails';
import AboutUs from './pages/AboutUs';
import Administrative from './pages/Admin';
import CustomerNavbar from './core/components/CustomerNavbar';
import CustomerFooter from './core/components/CustomerFooter';

const Routes = () => (
    <BrowserRouter>
        <CustomerNavbar />
        <Switch>
            <Route path="/" exact>
                <Homepage />
            </Route>
            <Route path="/:productId" exact>
                <ProductDetails />
            </Route>
            <Route path="/biblias" exact>
                <Bibles />
            </Route>
            <Route path="/biblias/:productId">
                <ProductDetails />
            </Route>
            <Route path="/feminino" exact>
                <Female />
            </Route>
            <Route path="/feminino/:productId">
                <ProductDetails />
            </Route>
            <Route path="/masculino" exact>
                <Male />
            </Route>
            <Route path="/masculino/:productId">
                <ProductDetails /> 
            </Route>
            <Route path="/livros" exact>
                <Books />
            </Route>
            <Route path="/livros/:productId">
                <ProductDetails />
            </Route>
            <Route path="/presentes" exact>
                <Gifts />
            </Route>
            <Route path="/presentes/:productId">
                <ProductDetails />
            </Route>
            <Route path="/sobrenos">
                <AboutUs />
            </Route>
            <Route path="/admin">
                <Administrative />
            </Route>
        </Switch>
        <CustomerFooter />
    </BrowserRouter>
);

export default Routes;