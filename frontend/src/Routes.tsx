import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Bibles from './pages/Bibles';
import Female from './pages/Female';
import Male from './pages/Male';
import Books from './pages/Books';
import Gifts from './pages/Gifts';
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
            <Route path="/biblias">
                <Bibles />
            </Route>
            <Route path="/feminino">
                <Female />
            </Route>
            <Route path="/masculino">
                <Male />
            </Route>
            <Route path="/livros">
                <Books />
            </Route>
            <Route path="/presentes">
                <Gifts />
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