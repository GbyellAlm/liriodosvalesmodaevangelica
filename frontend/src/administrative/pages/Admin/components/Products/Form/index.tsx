import React, { useState } from 'react';
import { makePrivateRequest } from '../../../../../../core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    promotionalPrice: string;
    paymentTerms: string;
    sizes: string
    image1: string;
    image2?: string;
    description: string;
}

type FormEvent = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '',
        promotionalPrice: '',
        paymentTerms: '',
        sizes: '',
        image1: '',
        image2: '',
        description: ''
    });

    const [promotionalPriceField, setPromotionalPriceField] = useState("d-none");

    const handleOnChange = (event: React.ChangeEvent<FormEvent>) => {
        const name = event.target.name;
        const value = event.target.value;

        name === "category" && value === "7" ? setPromotionalPriceField("d-block") : setPromotionalPriceField("d-none");

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            ...formData,
            categories: [{ id: formData.category }],
            images: [{ url: formData.image1, mainImage: true }],
        }

        console.log(payload);

        makePrivateRequest({ url: '/products', method: 'POST', data: payload }).then(() => {
            setFormData({
                name: '',
                price: '',
                category: '',
                promotionalPrice: '',
                paymentTerms: '',
                sizes: '',
                image1: '',
                image2: '',
                description: ''
            });
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm>
                <div className="row">
                    <div className="col-6 m-t-25">
                        <label htmlFor="name" className="form-label f-s-14">Nome do produto <b>*</b></label>
                        <input type="text" className="form-control b-r-10 f-s-14" id="name" name="name" value={formData.name} onChange={handleOnChange} />

                        <label htmlFor="price" className="form-label m-t-16 f-s-14">Preço do produto (<i>sem o R$</i>) <b>*</b></label>
                        <input type="number" className="form-control b-r-10 f-s-14" id="price" name="price" value={formData.price} onChange={handleOnChange} />

                        <label htmlFor="category" className="form-label m-t-16 f-s-14">Categorias do produto (<i>no mínimo uma</i>) <b>*</b></label>
                        <select className="form-select b-r-10 f-s-14" multiple aria-label="Categorias do produto" id="category" name="category" onChange={handleOnChange}>
                            <option value="#" disabled>-- Selecione --</option>
                            <option value="1">Bíblias</option>
                            <option value="2">Feminino</option>
                            <option value="3">Masculino</option>
                            <option value="4">Livros</option>
                            <option value="5">Presentes</option>
                            <option value="6">Produtos em destaque</option>
                            <option value="7">Promoções</option>
                        </select>

                        <div className={promotionalPriceField}>
                            <label htmlFor="promotionalPrice" className="form-label m-t-16 f-s-14">Preço promocional (<i>sem o R$</i>) <b>*</b></label>
                            <input type="number" className="form-control b-r-10 f-s-14" id="promotionalPrice" name="promotionalPrice" value={formData.promotionalPrice} onChange={handleOnChange} />
                        </div>

                        <label htmlFor="paymentTerms" className="form-label m-t-16 f-s-14">Condições de pagamento do produto <b>*</b></label>
                        <input type="text" className="form-control b-r-10 f-s-14" id="paymentTerms" name="paymentTerms" value={formData.paymentTerms} onChange={handleOnChange} placeholder="Ex: em até 4x de R$ 26,25 s/ juros no cartão" />

                        <label htmlFor="sizes" className="form-label m-t-16 f-s-14">Tamanhos do produto (<i>somente para roupas</i>)</label>
                        <input type="text" className="form-control b-r-10 f-s-14" id="sizes" name="sizes" value={formData.sizes} onChange={handleOnChange} placeholder="Ex: P, M, G e GG" />

                        <label htmlFor="image1" className="form-label m-t-16 f-s-14">Link da foto 1 do produto <b>*</b></label>
                        <input type="url" className="form-control b-r-10 f-s-14" id="image1" name="image1" value={formData.image1} onChange={handleOnChange} placeholder="Ex: https://images-shoptime.b2w.io/produtos/01/00/img/2866624/7/2866624746_1SZ.jpg" />

                        <label htmlFor="image2" className="form-label m-t-16 f-s-14">Link da foto 2 do produto</label>
                        <input type="url" className="form-control b-r-10 f-s-14" id="image2" name="image2" value={formData.image2} onChange={handleOnChange} placeholder="Ex: https://images-shoptime.b2w.io/produtos/01/00/img/2866624/7/2866624746_1SZ.jpg" />
                    </div>
                    <div className="col-6">
                        <div className="b-1-s-e5e5e5 b-r-10 text-editor">
                            <p>*Rich text*</p>
                        </div>
                        <label htmlFor="description" className="form-label m-t-16 f-s-14">Descrição do produto <b>*</b></label>
                        <textarea className="form-control b-r-10 f-s-14" id="description" name="description" value={formData.description} onChange={handleOnChange} cols={30} rows={20}></textarea>
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;
