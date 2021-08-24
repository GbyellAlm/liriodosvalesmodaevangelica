import { Control, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import { FormState } from './';

type Props = {
    control: Control<FormState>
}

const PriceField = ({ control }: Props) => (
    <Controller
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
        defaultValue=""

    />
)

export default PriceField;
