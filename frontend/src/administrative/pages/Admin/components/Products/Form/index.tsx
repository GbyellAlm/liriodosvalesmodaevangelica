import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Category } from 'core/types/Product';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import PriceField from './PriceField';
import Select, { Theme } from 'react-select';
import PromotionalPriceField from './PromocionalPriceField';
import ImageUpload from '../ImageUpload';
import './styles.scss';

export type FormState = {
    name: string;
    price: number;
    categories: Category[];
    promotionalPrice: string;
    paymentTerms: string;
    sizes: string
    imageURL: string;
    description: string;
}

type ParamsType = {
    productId: string;
}

const Form = () => {
    const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();

    const { productId } = useParams<ParamsType>();

    const isEditing = productId !== 'new-product';

    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setIsLoadingCategories(true);
        makePrivateRequest({ url: '/categories' })
            .then(response => setCategories(response.data))
            .finally(() => setIsLoadingCategories(false));
    }, []);

    const [uploadedImageURL, setUploadedImageURL] = useState('');

    const onUploadSuccess = (imageURL: string) => {
        setUploadedImageURL(imageURL);
    }

    const history = useHistory();

    const onSubmit = (data: FormState) => {
        const payload = {
            ...data,
            imageURL: uploadedImageURL || productImageURL
        }

        makePrivateRequest({
            url: isEditing ? `/products/${productId}` : '/products',
            method: isEditing ? 'PUT' : 'POST',
            data: payload
        })
            .then(() => {
                toast.success(isEditing === true ? "Produto salvo com sucesso." : "Produto cadastrado com sucesso.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                history.push("/admin/products");
            })
            .catch(() => {
                toast.error(isEditing === true ? "Erro ao salvar o produto." : "Erro ao cadastrar o produto.")
            });
    }

    const [productImageURL, setProductImageURL] = useState('');

    useEffect(() => {
        if (isEditing) {
            makeRequest({ url: `/products/${productId}` })
                .then(response => {
                    setValue('name', response.data.name);
                    setValue('price', response.data.price);
                    setValue('categories', response.data.categories);
                    response.data.promotionalPrice !== null && setValue('promotionalPrice', response.data.promotionalPrice);
                    setValue('paymentTerms', response.data.paymentTerms);
                    setValue('sizes', response.data.sizes);
                    setProductImageURL(response.data.imageURL);
                    setValue('description', response.data.description);
                })
        }
    }, [isEditing, productId, setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4">
                        <label htmlFor="name" className="form-label">NOME DO PRODUTO <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            placeholder="Ex: Bíblia c/ espaço para anotações, Leão pintura, Espiral"
                            id="name"
                            name="name"
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        {errors.name && (
                            <div className="invalid-feedback d-block">
                                {errors.name.message}
                            </div>
                        )}

                        <label htmlFor="price" className="form-label mt-3">PREÇO DO PRODUTO <b>*</b></label>
                        <PriceField control={control} />
                        {errors.price && (
                            <div className="invalid-feedback d-block">
                                {errors.price.message}
                            </div>
                        )}

                        <label htmlFor="categories" className="form-label mt-3">CATEGORIAS DO PRODUTO <b>*</b></label>
                        <Controller
                            as={Select}
                            classNamePrefix="categories-select"
                            theme={(theme: Theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'rgba(99, 192, 225, 0.4)',
                                    primary: '#63c0e1'
                                },
                            })}
                            placeholder="Selecione"
                            defaultValue=""
                            isMulti
                            id="categories"
                            name="categories"
                            isLoading={isLoadingCategories}
                            options={categories}
                            getOptionValue={(option: Category) => String(option.id)}
                            getOptionLabel={(option: Category) => option.name}
                            control={control}
                            rules={{ required: true }}
                        />
                        {errors.categories && (
                            <div className="invalid-feedback d-block">
                                Campo obrigatório
                            </div>
                        )}

                        <label htmlFor="promotionalPrice" className="form-label mt-3">PREÇO PROMOCIONAL DO PRODUTO</label>
                        <PromotionalPriceField control={control} />
                        <small id="promotionalPriceHelp" className="form-text text-warning">Este campo só deve ser preenchido se o produto estiver em promoção</small>
                        {errors.promotionalPrice && (
                            <div className="invalid-feedback d-block">
                                {errors.promotionalPrice.message}
                            </div>
                        )}

                        <label htmlFor="paymentTerms" className="form-label mt-3">CONDIÇÕES DE PAGAMENTO DO PRODUTO <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            placeholder="Ex: em até 4x de R$ 26,25 s/ juros no cartão"
                            id="paymentTerms"
                            name="paymentTerms"
                            ref={register({
                                required: "Campo obrigatório",
                                minLength: { value: 39, message: 'O campo deve ter no mínimo 39 caracteres' },
                                maxLength: { value: 41, message: 'O campo deve ter no máximo 41 caracteres' }
                            })}
                        />
                        {errors.paymentTerms && (
                            <div className="invalid-feedback d-block">
                                {errors.paymentTerms.message}
                            </div>
                        )}

                        <label htmlFor="sizes" className="form-label mt-3">TAMANHOS DO PRODUTO</label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            placeholder="Ex: P, M, G e GG."
                            id="sizes"
                            name="sizes"
                            aria-describedby="sizesHelp"
                            ref={register({
                                required: false,
                                minLength: { value: 1, message: 'O campo deve ter no mínimo 1 caracter' },
                                maxLength: { value: 12, message: 'O campo deve ter no máximo 12 caracteres' }
                            })}
                        />
                        <small id="sizesHelp" className="form-text text-warning">Este campo só deve ser preenchido se o produto for uma roupa</small>
                        {errors.sizes && (
                            <div className="invalid-feedback d-block">
                                {errors.sizes.message}
                            </div>
                        )}

                        <ImageUpload onUploadSuccess={onUploadSuccess} productImageURL={productImageURL} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="description" className="form-label mt-4">DESCRIÇÃO DO PRODUTO <b>*</b></label>
                        <textarea
                            className="form-control b-r-10"
                            placeholder="Ex: Bíblia Sagrada, com a linguagem na versão ARC (Revista Corrigida) de João Ferreira de Almeida. Sendo a versão mais utilizada pelos evangélicos do Brasil. Com sua fidelidade traduzida dos textos originais pelo missionário português João Ferreira de Almeida, esta obra tem como destaque sua linguagem elegante e culta. Agora a mais nova edição da Casa Publicadora Paulista, apresentamos a vocês a Bíblia com Espaço para Anotações Pautados, com diferenciais exclusivos e também muito procurados, a bíblia com espaço para anotações contém Harpa, Corinhos e Índice lateral."
                            id="description"
                            name="description"
                            cols={30}
                            rows={15}
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        {errors.description && (
                            <div className="invalid-feedback d-block">
                                {errors.description.message}
                            </div>
                        )}
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;
