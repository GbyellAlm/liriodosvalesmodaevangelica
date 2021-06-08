import React, { useState } from 'react';
import { makeRequest } from '../../../../../core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    isPromotion: string;
    promotionalPrice: string;
    paymentTerms: string;
    category: string;
    sizes: string
    image1: string;
    image2?: string;
    image3?: string;
    description: string;
}

type FormEvent = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        isPromotion: '',
        promotionalPrice: '',
        paymentTerms: '',
        category: '',
        sizes: '',
        image1: '',
        image2: '',
        image3: '',
        description: ''
    });

    const handleOnChange = (event: React.ChangeEvent<FormEvent>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const productPayload = {
            ...formData,
            categories: [{ id: formData.category }],
            images: [{ url: formData.image1, mainImage: true }]
        }
        
        makeRequest({ url: '/products', method: 'POST', data: productPayload });
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm>
                <div className="row">
                    <div className="col-6 p-t-25 p-l-0">
                        <input
                            type="text"
                            className="form-control f-s-14"
                            name="name"
                            placeholder="Nome"
                            onChange={handleOnChange}
                            value={formData.name}
                        />
                        <input
                            type="number"
                            className="form-control m-t-15 f-s-14"
                            name="price"
                            placeholder="Preço"
                            onChange={handleOnChange}
                            value={formData.price}
                        />
                        <select
                            className="form-select m-t-15 f-s-14"
                            name="isPromotion"
                            onChange={handleOnChange}
                            value={formData.isPromotion}
                        >
                            <option>Promoção?</option>
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </select>
                        <input
                            type="number"
                            className="form-control m-t-15 f-s-14"
                            name="promotionalPrice"
                            placeholder="Preço promocional (opcional)"
                            onChange={handleOnChange}
                            value={formData.promotionalPrice}
                        />
                        <input
                            type="text"
                            className="form-control m-t-15 f-s-14"
                            placeholder="Condições de pagamento"
                            onChange={handleOnChange}
                            name="paymentTerms"
                            value={formData.paymentTerms}
                        />
                        <select
                            className="form-select m-t-15 f-s-14"
                            name="category"
                            onChange={handleOnChange}
                            value={formData.category}
                        >
                            <option>Categorias (uma ou várias)</option>
                            <option value="">1Bíblias</option>
                            <option value="2">Feminino</option>
                            <option value="3">Masculino</option>
                            <option value="4">Livros</option>
                            <option value="5">Presentes</option>
                            <option value="6">Produtos em destaque</option>
                            <option value="7">Promoções</option>
                        </select>
                        <input
                            type="text"
                            className="form-control m-t-15 f-s-14"
                            name="sizes"
                            placeholder="Tamanhos do produto (P, M, G e GG)"
                            onChange={handleOnChange}
                            //value={formData.image[]}
                        />
                        <input
                            type="text"
                            className="form-control m-t-15 f-s-14"
                            name="image1"
                            placeholder="Link imagem 1"
                            onChange={handleOnChange}
                            //value={formData.image[]}
                        />
                        <input
                            type="text"
                            className="form-control m-t-15 f-s-14"
                            name="image2"
                            placeholder="Link imagem 2 (opcional)"
                            onChange={handleOnChange}
                            //value={formData.image2}
                        />
                        <input
                            type="text"
                            className="form-control m-t-15 f-s-14"
                            name="image3"
                            placeholder="Link imagem 3 (opcional)"
                            onChange={handleOnChange}
                            //value={formData.image3}
                        />
                    </div>
                    <div className="col-6 p-t-25 p-r-0">
                        <div className="form-group textarea">
                            <textarea
                                className="form-control"
                                name="description"
                                placeholder="Descrição"
                                onChange={handleOnChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;
