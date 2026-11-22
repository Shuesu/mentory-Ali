import { useState } from 'react';
import { Child } from './Child';

export default function App() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Заголовок A');
    const [show, setShow] = useState(true);

    console.log('[App] render, count =', count);

    return (
        <div>
            <h1>Счётчик: {count}</h1>

            <button onClick={() => setCount((c) => c + 1)}>+1 (родитель)</button>
            <button
                onClick={() =>
                    setTitle((t) => (t === 'Заголовок A' ? 'Заголовок B' : 'Заголовок A'))
                }
            >
                Сменить title ребёнка
            </button>
            <button onClick={() => setShow((s) => !s)}>
                {show ? 'Размонтировать' : 'Смонтировать'} ребёнка
            </button>

            {show && <Child title={title} />}
        </div>
    );
}