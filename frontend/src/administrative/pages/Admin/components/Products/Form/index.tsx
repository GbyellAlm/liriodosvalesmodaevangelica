import React, { useState } from 'react';
import { makePrivateRequest } from '../../../../../../core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    paymentTerms: string;
    categories: string;
    promotionalPrice: string;
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
        paymentTerms: '',
        categories: '',
        promotionalPrice: '',
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

        const payload = {
            ...formData,
            categories: [{ id: formData.categories }],
            images: [
                { url: formData.image1, mainImage: true }
            ]
        }

        makePrivateRequest({ url: '/products', method: 'POST', data: payload }).then(() => {
            setFormData({
                name: '',
                price: '',
                paymentTerms: '',
                categories: '',
                promotionalPrice: '',
                sizes: '',
                image1: '',
                image2: '',
                image3: '',
                description: ''
            });
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm>
                <div className="row">
                    <div className="col-6 m-t-19">
                        <label htmlFor="name" className="form-label  f-s-14">Nome do produto *</label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleOnChange}
                        />

                        <label htmlFor="productPrice" className="form-label m-t-9-point-5 f-s-14">Preço *</label>
                        <input
                            type="number"
                            className="form-control b-r-10 f-s-14"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleOnChange}
                        />

                        <label htmlFor="paymentTerms" className="form-label m-t-9-point-5 f-s-14">Condições de pagamento *</label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
                            id="paymentTerms"
                            placeholder="Ex: em até 4x de R$ 26,25 s/ juros no cartão"
                            name="paymentTerms"
                            value={formData.paymentTerms}
                            onChange={handleOnChange}
                        />

                        <label htmlFor="categories" className="m-t-9-point-5 f-s-14">Categorias (no mínimo uma) *</label>
                        <select
                            className="form-select b-r-10 f-s-14"
                            id="categories"
                            name="categories"
                            //value={formData.categories}
                            onChange={handleOnChange}
                            aria-label="Categorias do produto"
                            multiple
                        >
                            <option value="#" disabled>Selecione</option>
                            <option value="1">Bíblias</option>
                            <option value="2">Feminino</option>
                            <option value="3">Masculino</option>
                            <option value="4">Livros</option>
                            <option value="5">Presentes</option>
                            <option value="6">Produtos em destaque</option>
                            <option value="7">Promoções</option>
                        </select>

                        <label htmlFor="promotionalPrice" className="form-label m-t-9-point-5 f-s-14">Preço promocional</label>
                        <input
                            type="number"
                            className="form-control b-r-10 f-s-14"
                            id="promotionalPrice"
                            name="promotionalPrice"
                            value={formData.promotionalPrice}
                            onChange={handleOnChange}
                            disabled
                        />

                        <label htmlFor="sizes" className="form-label m-t-9-point-5 f-s-14">Tamanhos</label>
                        <input
                            type="text"
                            className="form-control b-r-10 f-s-14"
                            id="sizes"
                            placeholder="Ex: P, M, G e GG"
                            name="sizes"
                            value={formData.sizes}
                            onChange={handleOnChange}
                        />

                        <label htmlFor="image1" className="form-label m-t-9-point-5 f-s-14">Link da imagem 1 *</label>
                        <input
                            type="url"
                            className="form-control b-r-10 f-s-14"
                            id="image1"
                            name="image1"
                            value={formData.image1}
                            onChange={handleOnChange}
                        />

                        <label htmlFor="image2" className="form-label m-t-9-point-5 f-s-14">Link da imagem 2</label>
                        <input
                            type="url"
                            className="form-control b-r-10 f-s-14"
                            id="image2"
                            name="image2"
                            value={formData.image2}
                            onChange={handleOnChange}
                        />

                        <label htmlFor="image3" className="form-label m-t-9-point-5 f-s-14">Link da imagem 3</label>
                        <input
                            type="url"
                            className="form-control b-r-10 f-s-14"
                            id="image3"
                            name="image3"
                            value={formData.image3}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="col-6">
                        <div className="b-1-s-e5e5e5 b-r-10 text-editor">
                            <p>*Rich text*</p>
                        </div>
                        <div>
                            <label htmlFor="description" className="form-label m-t-9-point-5 f-s-14">Descrição *</label>
                            <textarea
                                className="form-control b-r-10 f-s-14"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleOnChange}
                                cols={30}
                                rows={21}></textarea>
                        </div>
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;
