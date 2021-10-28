import { Control, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import { FormState } from './';

type Props = {
    control: Control<FormState>
}

const PromocionalPriceField = ({ control }: Props) => (
    <Controller
        id="promotionalPrice"
        name="promotionalPrice"
        defaultValue=""
        aria-describedby="promotionalPriceHelp"
        control={control}
        rules={{ required: false }}
        render={({ value, onChange }) => (
            <CurrencyInput
                className="form-control b-r-10"
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                disableGroupSeparators={true}
                decimalSeparator="."
                fixedDecimalLength={2}
                value={value}
                onValueChange={onChange}
            />
        )}
    />
);

export default PromocionalPriceField;
