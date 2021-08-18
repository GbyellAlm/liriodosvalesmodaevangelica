import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makePrivateRequest, makeRequest } from '../../../../../../core/utils/request';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
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
    const { register, handleSubmit, errors, setValue } = useForm<FormState>();

    const [promotionalPriceField, setPromotionalPriceField] = useState("d-none");

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        name === "category" && value === "7" ? setPromotionalPriceField("d-block") : setPromotionalPriceField("d-none");
    }

    const history = useHistory();

    const { productId } = useParams<ParamsType>();

    const isEditing = productId !== 'new-product';

    useEffect(() => {
        if (isEditing) {
            makeRequest({ url: `/products/${productId}` })
                .then(response => {
                    setValue('name', response.data.name);
                    setValue('price', response.data.price);
                    setValue('promotionalPrice', response.data.promotionalPrice);
                    setValue('paymentTerms', response.data.paymentTerms);
                    setValue('sizes', response.data.sizes);
                    //setValue('image1', response.data.image1);
                    setValue('description', response.data.description);
                })
        }
    }, [isEditing, productId, setValue]);

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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm>
                <div className="row">
                    <div className="col-6 m-t-25">
                        <label htmlFor="name" className="form-label f-s-14">Nome <b>*</b></label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
                            id="name"
                            name="name"
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        {errors.name && (
                            <div className="invalid-feedback d-block">
                                {errors.name.message}
                            </div>
                        )}

                        <label htmlFor="price" className="form-label m-t-16 f-s-14">Preço <b>*</b></label>
                        <input
                            type="number"
                            className="form-control b-r-10 f-s-14"
                            id="price"
                            name="price"
                            ref={register({ required: "Campo obrigatório" })}
                        />
                        {errors.price && (
                            <div className="invalid-feedback d-block">
                                {errors.price.message}
                            </div>
                        )}

                        <div className={promotionalPriceField}>
                            <label htmlFor="promotionalPrice" className="form-label m-t-16 f-s-14">Preço promocional <b>*</b></label>
                            <input
                                type="number"
                                className="form-control b-r-10 f-s-14"
                                id="promotionalPrice"
                                name="promotionalPrice"
                                ref={promotionalPriceField === "d-block" ? register({ required: "Campo obrigatório" }) : register({ required: false })}
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
                            id="paymentTerms"
                            name="paymentTerms"
                            ref={register({
                                required: "Campo obrigatório",
                                minLength: { value: 39, message: 'O campo deve ter no mínimo 39 caracteres' },
                                maxLength: { value: 41, message: 'O campo deve ter no máximo 41 caracteres' }
                            })}
                            placeholder="Ex: em até 4x de R$ 26,25 s/ juros no cartão"
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
                            id="sizes"
                            name="sizes"
                            placeholder="Ex: P, M, G e GG"
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

                        <label htmlFor="image1" className="form-label m-t-16 f-s-14">Link da foto 1 <b>*</b></label>
                        <input
                            type="url"
                            className="form-control b-r-10 f-s-14"
                            id="image1"
                            name="image1"
                            ref={register({ required: false })}
                            placeholder="Ex: https://images-shoptime.b2w.io/produtos/01/00/img/2866624/7/2866624746_1SZ.jpg"
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
