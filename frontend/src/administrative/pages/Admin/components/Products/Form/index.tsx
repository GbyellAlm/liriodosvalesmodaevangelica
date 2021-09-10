import React, { useEffect, useState } from 'react';
import { Category } from '../../../../../../core/types/Product';
import { makePrivateRequest, makeRequest } from '../../../../../../core/utils/request';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import CurrencyInput from 'react-currency-input-field';
import Select from 'react-select';
import './styles.scss';

type FormState = {
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
    const { register, handleSubmit, errors, setValue, control, watch } = useForm<FormState>();

    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setIsLoadingCategories(true);
        makePrivateRequest({ url: '/categories' })
            .then(response => setCategories(response.data))
            .finally(() => setIsLoadingCategories(false));
    }, []);

    //const [promotionalPriceField, setPromotionalPriceField] = useState("d-none");

    //const [validation, setValidation] = useState(false);

    //const selectedCategories = watch("categories");

    /*selectedCategories?.map(cat => {
        if (cat.id === 7) {
            setValidacao(true);
        }
    })*/

    const { productId } = useParams<ParamsType>();

    const isEditing = productId !== 'new-product';

    const history = useHistory();

    const onSubmit = (data: FormState) => {


        makePrivateRequest({
            url: isEditing ? `/products/${productId}` : '/products',
            method: isEditing ? 'PUT' : 'POST',
            data: data
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
                    setValue('imageURL', response.data.imageURL);
                    setValue('description', response.data.description);
                })
        }
    }, [isEditing, productId, setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm>
                <div className="row">
                    <div className="col-6 m-t-25">
                        <label htmlFor="name" className="form-label">Nome <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10"
                            id="name"
                            name="name"
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        {errors.name && (
                            <div className="invalid-feedback d-block">
                                {errors.name.message}
                            </div>
                        )}

                        <label htmlFor="price" className="form-label m-t-16">Preço <b>*</b></label>
                        <Controller
                            defaultValue=""
                            id="price"
                            name="price"
                            control={control}
                            rules={{ required: "Campo obrigatório" }}
                            render={({ value, onChange }) => (
                                <CurrencyInput
                                    className="form-control b-r-10"
                                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                                    disableGroupSeparators={true}
                                    fixedDecimalLength={2}
                                    decimalSeparator="."
                                    value={value}
                                    onValueChange={onChange}
                                />
                            )}
                        />
                        {errors.price && (
                            <div className="invalid-feedback d-block">
                                {errors.price.message}
                            </div>
                        )}

                        <label htmlFor="categories" className="form-label m-t-16">Categorias <b>*</b></label>
                        <Controller
                            as={Select}
                            classNamePrefix="categories-select"
                            placeholder="-- Selecione --"
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

                        <div className="">
                            <label htmlFor="promotionalPrice" className="form-label m-t-16 f-s-14">Preço promocional <b>*</b></label>
                            <Controller
                                defaultValue=""
                                id="promotionalPrice"
                                name="promotionalPrice"
                                control={control}
                                rules={{
                                    required: false
                                }}
                                render={({ value, onChange }) => (
                                    <CurrencyInput
                                        className="form-control b-r-10"
                                        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                                        disableGroupSeparators={true}
                                        fixedDecimalLength={2}
                                        decimalSeparator="."
                                        value={value}
                                        onValueChange={onChange}
                                    />
                                )}
                            />
                            {errors.promotionalPrice && (
                                <div className="invalid-feedback d-block">
                                    {errors.promotionalPrice.message}
                                </div>
                            )}
                        </div>

                        <label htmlFor="paymentTerms" className="form-label m-t-16 f-s-14">Condições de pagamento <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
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

                        <label htmlFor="sizes" className="form-label m-t-16 f-s-14">Tamanhos disponíveis <i>(somente para roupas)</i></label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
                            placeholder="Ex: P, M, G e GG"
                            id="sizes"
                            name="sizes"
                            ref={register({
                                required: false,
                                minLength: { value: 1, message: 'O campo deve ter no mínimo 1 caracter' },
                                maxLength: { value: 12, message: 'O campo deve ter no máximo 12 caracteres' }
                            })}
                        />
                        {errors.sizes && (
                            <div className="invalid-feedback d-block">
                                {errors.sizes.message}
                            </div>
                        )}

                        <label htmlFor="imageURL" className="form-label m-t-16 f-s-14">Link da foto 1 <b>*</b></label>
                        <input
                            type="url"
                            className="form-control b-r-10 f-s-14"
                            placeholder="Ex: https://images-shoptime.b2w.io/produtos/01/00/img/2866624/7/2866624746_1SZ.jpg"
                            id="imageURL"
                            name="imageURL"
                            ref={register({ required: false })}
                        />
                        {errors.imageURL && (
                            <div className="invalid-feedback d-block">
                                {errors.imageURL.message}
                            </div>
                        )}

                    </div>
                    <div className="col-6">
                        <div className="b-1-s-e5e5e5 b-r-10 text-editor">
                            <p>* Rich text *</p>
                        </div>

                        <label htmlFor="description" className="form-label m-t-16 f-s-14">Descrição <b>*</b></label>
                        <textarea
                            className="form-control b-r-10 f-s-14"
                            id="description"
                            name="description"
                            cols={30}
                            rows={20}
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
