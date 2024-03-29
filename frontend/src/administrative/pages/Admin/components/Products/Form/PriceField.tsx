import { Control, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import { FormState } from './';

type Props = {
    control: Control<FormState>
}

const PriceField = ({ control }: Props) => (
    <Controller
        id="unformattedPrice"
        name="unformattedPrice"
        defaultValue=""
        control={control}
        rules={{ required: "Campo obrigatório" }}
        render={({ value, onChange }) => (
            <CurrencyInput
                className="form-control b-r-10"
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                value={value}
                onValueChange={onChange}
            />
        )}
    />
);

export default PriceField;
