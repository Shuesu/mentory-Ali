import { useRef } from 'react';

type Props = { onApply: (value: string) => void };

export function UncontrolledFilter({ onApply }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    const reset = () => {
        if (inputRef.current) inputRef.current.value = '';
        onApply('');
    };

    return (
        <div>
            <h3>Неуправляемый</h3>
            <input ref={inputRef} defaultValue="" />
            <button onClick={() => onApply(inputRef.current?.value ?? '')}>
                Применить
            </button>
            <button onClick={reset}>Сброс</button>
        </div>
    );
}