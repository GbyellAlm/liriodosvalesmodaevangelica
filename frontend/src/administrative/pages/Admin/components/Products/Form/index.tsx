import React, { useEffect, useState } from 'react';
import { Category } from '../../../../../../core/types/Product';
import { makePrivateRequest, makeRequest } from '../../../../../../core/utils/request';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import PriceField from './PriceField';
import PromotionalPriceField from './PromotionalPriceField';
import Select from 'react-select';
import './styles.scss';

export type FormState = {
    name: string;
    price: number;
    categories: Category[];
    promotionalPrice: string;
    paymentTerms: string;
    sizes: string
    image1: string;
    description: string;
}

type ParamsType = {
    productId: string;
}

const Form = () => {
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setIsLoadingCategories(true);
        makePrivateRequest({ url: '/categories' })
            .then(response => setCategories(response.data))
            .finally(() => setIsLoadingCategories(false));
    }, []);

    const [promotionalPriceField, setPromotionalPriceField] = useState("d-none");

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        name === "categories" && value === "7" ? setPromotionalPriceField("d-block") : setPromotionalPriceField("d-none");
    }

    const { register, handleSubmit, errors, setValue, control, watch } = useForm<FormState>();

    const history = useHistory();

    const onSubmit = (data: FormState) => {
        const payload = {
            ...data,
            images: [{ url: data.image1, mainImage: true }]
        }

        makePrivateRequest({
            url: isEditing ? `/products/${productId}` : '/products',
            method: isEditing ? 'PUT' : 'POST',
            data: payload
        })
            .then(() => {
                toast.success(isEditing === true ? "Produto salvo com sucesso!" : "Produto cadastrado com sucesso!", {
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
                toast.error(isEditing === true ? "Erro ao salvar o produto!" : "Erro ao cadastrar o produto!")
            });
    }

    const { productId } = useParams<ParamsType>();

    const isEditing = productId !== 'new-product';

    useEffect(() => {
        if (isEditing) {
            makeRequest({ url: `/products/${productId}` })
                .then(response => {
                    setValue('name', response.data.name);
                    setValue('price', response.data.price);
                    setValue('categories', response.data.categories);
                    setValue('promotionalPrice', response.data.promotionalPrice);
                    setValue('paymentTerms', response.data.paymentTerms);
                    setValue('sizes', response.data.sizes);
                    //setValue('image1', response.data.image1);
                    setValue('description', response.data.description);
                })
        }
    }, [isEditing, productId, setValue]);

    const selectedCategory = watch("categories");

    const [selectedValue, setSelectedValue] = useState([]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm>
                <div className="row">
                    <div className="col-6 m-t-25">
                        <label htmlFor="name" className="form-label">Nome <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            name="name"
                            ref={register({ required: "Campo obrigat??rio" })}
                        />
                        {errors.name && (
                            <div className="invalid-feedback d-block">
                                {errors.name.message}
                            </div>
                        )}

                        <label htmlFor="price" className="form-label m-t-16">Pre??o <b>*</b></label>
                        <PriceField control={control} />
                        {errors.price && (
                            <div className="invalid-feedback d-block">
                                {errors.price.message}
                            </div>
                        )}

                        <label htmlFor="categories" className="form-label m-t-16">Categorias <b>*</b></label>
                        <Controller
                            as={Select}
                            classNamePrefix="categories-select"
                            isMulti
                            name="categories"
                            placeholder="-- Selecione --"
                            options={categories}
                            getOptionValue={(option: Category) => String(option.id)}
                            getOptionLabel={(option: Category) => option.name}
                            control={control}
                            rules={{ required: true }}
                            isLoading={isLoadingCategories}
                            defaultValue=""
                        />
                        {errors.categories && (
                            <div className="invalid-feedback d-block">
                                Campo obrigat??rio
                            </div>
                        )}

                        <div className={promotionalPriceField}>
                            <label htmlFor="promotionalPrice" className="form-label m-t-16 f-s-14">Pre??o promocional <b>*</b></label>
                            <PromotionalPriceField control={control} />
                            {errors.promotionalPrice && (
                                <div className="invalid-feedback d-block">
                                    {errors.promotionalPrice.message}
                                </div>
                            )}
                        </div>

                        <label htmlFor="paymentTerms" className="form-label m-t-16 f-s-14">Condi????es de pagamento <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
                            name="paymentTerms"
                            placeholder="Ex: em at?? 4x de R$ 26,25 s/ juros no cart??o"
                            ref={register({
                                required: "Campo obrigat??rio",
                                minLength: { value: 39, message: 'O campo deve ter no m??nimo 39 caracteres' },
                                maxLength: { value: 41, message: 'O campo deve ter no m??ximo 41 caracteres' }
                            })}
                        />
                        {errors.paymentTerms && (
                            <div className="invalid-feedback d-block">
                                {errors.paymentTerms.message}
                            </div>
                        )}

                        <label htmlFor="sizes" className="form-label m-t-16 f-s-14">Tamanhos dispon??veis <i>(somente para roupas)</i></label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
                            name="sizes"
                            placeholder="Ex: P, M, G e GG"
                            ref={register({
                                required: false,
                                minLength: { value: 1, message: 'O campo deve ter no m??nimo 1 caracter' },
                                maxLength: { value: 12, message: 'O campo deve ter no m??ximo 12 caracteres' }
                            })}
                        />
                        {errors.sizes && (
                            <div className="invalid-feedback d-block">
                                {errors.sizes.message}
                            </div>
                        )}

                        <label htmlFor="image1" className="form-label m-t-16 f-s-14">Link da foto 1 <b>*</b></label>
                        <input
                            type="url"
                            className="form-control b-r-10 f-s-14"
                            name="image1"
                            placeholder="Ex: https://images-shoptime.b2w.io/produtos/01/00/img/2866624/7/2866624746_1SZ.jpg"
                            ref={register({ required: false })}
                        />
                        {errors.image1 && (
                            <div className="invalid-feedback d-block">
                                {errors.image1.message}
                            </div>
                        )}

                    </div>
                    <div className="col-6">
                        <div className="b-1-s-e5e5e5 b-r-10 text-editor">
                            <p>*Rich text*</p>
                        </div>
                        <label htmlFor="description" className="form-label m-t-16 f-s-14">Descri????o <b>*</b></label>
                        <textarea
                            className="form-control b-r-10 f-s-14"
                            name="description"
                            cols={30}
                            rows={20}
                            ref={register({ required: "Campo obrigat??rio" })}
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
