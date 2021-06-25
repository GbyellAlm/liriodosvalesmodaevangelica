import { Switch, Route } from 'react-router-dom';
import List from './List';
import Form from './Form';
import './styles.scss';

const Products = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/products" exact>
                    <List />
                </Route>
                <Route path="/admin/products/new-product">
                    <Form />
                </Route>
                <Route path="/admin/products/:productId">
                    <h1>Editar produto</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Products;