import { useHistory } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Category, ProductsResponse } from '../../../../../../core/types/Product';
import { makePrivateRequest, makeRequest } from '../../../../../../core/utils/request';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Select from 'react-select';
import AdminProductCardLoader from '../../Loaders/AdminProductCardLoader';
import Card from '../Card';
import Pagination from '../../../../../../core/components/Pagination';
import './styles.scss';

const List = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/products/new-product');
    }

    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setIsLoadingCategories(true);
        makePrivateRequest({ url: '/categories' })
            .then(response => setCategories(response.data))
            .finally(() => setIsLoadingCategories(false));
    }, []);

    const [selectedCategory, setSelectedCategory] = useState<Category>({ "id": 1, "name": "Bíblias" });

    const handleChange = (category: Category) => {
        setSelectedCategory(category);
    }

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    const [isLoading, setIsLoading] = useState(false);

    const [activePage, setActivePage] = useState(0);

    const getProducts = useCallback(() => {
        const params = {
            catId: selectedCategory?.id,
            direction: 'DESC',
            linesPerPage: 4,
            page: activePage,
            orderBy: 'id'
        }

        setIsLoading(true);
        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage, selectedCategory]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const onRemove = (productId: number) => {
        const confirm = window.confirm('Tem certeza que deseja excluír este produto?');
        if (confirm) {
            makePrivateRequest({ url: `/products/${productId}`, method: 'DELETE' })
                .then(() => {
                    toast.success("Produto excluído com sucesso!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    getProducts();
                })
                .catch(() => {
                    toast.error("Erro ao excluir o produto!");
                })
        }
    }

    return (
        <div className="admin-product-list-container">
            <Helmet title="Administrativo: Produtos · Lírio dos Vales - Moda Evangélica" />
            <div className="d-flex">
                <button className="btn btn-primary btn-lg b-r-10 text-white f-s-14" type="button" onClick={handleCreate}>
                    CADASTRAR NOVO PRODUTO
                </button>
                <div className="ml-3 base-container b-r-10 b-s-1-10 product-category-filter-container">
                    <Select
                        classNamePrefix="product-category-select"
                        placeholder="Filtrar por categoria"
                        name="category"
                        isLoading={isLoadingCategories}
                        options={categories}
                        getOptionValue={(option: Category) => String(option.id)}
                        getOptionLabel={(option: Category) => option.name}
                        value={selectedCategory}
                        onChange={value => handleChange(value as Category)}
                    />
                </div>
            </div>
            <div className="admin-list-container">
                {isLoading ? <AdminProductCardLoader /> : (
                    productsResponse?.content.map(product => (
                        <Card product={product} key={product.id} onRemove={onRemove} />
                    ))
                )}
            </div>
            {productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />}
        </div>
    )
}

export default List;
