import { useState } from 'react';
import { PlainList, MemoList } from './Lists';
import type { Dir, SortKey } from './sort';

export default function App() {
    const [count, setCount] = useState(0);
    const [sortKey, setSortKey] = useState<SortKey>('title');
    const [dir, setDir] = useState<Dir>('asc');

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>
                Счетчик: {count}
            </button>
            <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
            >
                <option value="title">по названию</option>
                <option value="seats">по местам</option>
            </select>
            <button onClick={() => setDir((d) => (d === 'asc' ? 'desc' : 'asc'))}>
                Направление: {dir}
            </button>

            <PlainList sortKey={sortKey} dir={dir} />
            <MemoList sortKey={sortKey} dir={dir} />
        </div>
    );
}cd ..
    git add .
    git commit -m "hw-09"
git push