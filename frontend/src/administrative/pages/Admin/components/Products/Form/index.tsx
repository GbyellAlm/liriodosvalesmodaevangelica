import { Category } from 'core/types/Product';
import { convertToRaw, EditorState } from 'draft-js';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import draftToHtml from 'draftjs-to-html';
import { toast } from 'react-toastify';
import { stateFromHTML } from 'draft-js-import-html';
import BaseForm from '../../BaseForm';
import PriceField from './PriceField';
import Select, { Theme } from 'react-select';
import PromotionalPriceField from './PromocionalPriceField';
import ImageUpload from '../ImageUpload';
import DescriptionField from './DescriptionField';
import './styles.scss';

export type FormState = {
    name: string;
    price: number;
    categories: Category[];
    promotionalPrice: string;
    paymentTerms: string;
    sizes: string
    imageURL: string;
    description: EditorState;
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

    const getDescriptionFromEditor = (editorState: EditorState) => {
        return draftToHtml(convertToRaw(editorState.getCurrentContent()));
    }

    const history = useHistory();

    const onSubmit = (data: FormState) => {
        const payload = {
            ...data,
            imageURL: uploadedImageURL || productImageURL,
            description: getDescriptionFromEditor(data.description)
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
                    const contentState = stateFromHTML(response.data.description);
                    const descriptionAsEditorState = EditorState.createWithContent(contentState);
                    setValue('description', descriptionAsEditorState);
                })
        }
    }, [isEditing, productId, setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 m-t-21">
                        <label htmlFor="name" className="form-label">NOME DO PRODUTO <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            id="name"
                            name="name"
                            placeholder="Ex: Bíblia c/ espaço para anotações, Leão pintura, Espiral"
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        {errors.name && (
                            <div className="invalid-feedback d-block">
                                {errors.name.message}
                            </div>
                        )}

                        <label htmlFor="price" className="form-label m-t-15">PREÇO DO PRODUTO <b>*</b></label>
                        <PriceField control={control} />
                        {errors.price && (
                            <div className="invalid-feedback d-block">
                                {errors.price.message}
                            </div>
                        )}

                        <label htmlFor="categories" className="form-label m-t-15">CATEGORIAS DO PRODUTO <b>*</b></label>
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
                            isMulti
                            id="categories"
                            name="categories"
                            placeholder="Selecione"
                            defaultValue=""
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

                        <label htmlFor="promotionalPrice" className="form-label m-t-15">PREÇO PROMOCIONAL DO PRODUTO</label>
                        <PromotionalPriceField control={control} />
                        <small id="promotionalPriceHelp" className="form-text text-warning">Este campo só deve ser preenchido se o produto estiver em promoção</small>
                        {errors.promotionalPrice && (
                            <div className="invalid-feedback d-block">
                                {errors.promotionalPrice.message}
                            </div>
                        )}

                        <label htmlFor="paymentTerms" className="form-label m-t-15">CONDIÇÕES DE PAGAMENTO DO PRODUTO <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            id="paymentTerms"
                            name="paymentTerms"
                            placeholder="Ex: em até 4x de R$ 26,25 s/ juros no cartão"
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

                        <label htmlFor="sizes" className="form-label m-t-15">TAMANHOS DO PRODUTO</label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            id="sizes"
                            name="sizes"
                            placeholder="Ex: P, M, G e GG"
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
                        <label htmlFor="description" className="form-label m-t-21">DESCRIÇÃO DO PRODUTO <b>*</b></label>
                        <DescriptionField control={control} />
                        {errors.description && (
                            <div className="invalid-feedback d-block">
                                Campo obrigatório
                            </div>
                        )}
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;
