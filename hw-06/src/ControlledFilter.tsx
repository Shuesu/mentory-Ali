import { useState } from 'react';

type Props = { onApply: (value: string) => void };

export function ControlledFilter({ onApply }: Props) {
    const [value, setValue] = useState('');

    const reset = () => {
        setValue('');
        onApply('');
    };

    return (
        <div>
            <h3>Управляемый</h3>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => onApply(value)}>Применить</button>
            <button onClick={reset}>Сброс</button>
            <p>Значение в state: "{value}"</p>
        </div>
    );
}