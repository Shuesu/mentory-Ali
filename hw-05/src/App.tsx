import { useState } from 'react';
import { Panel } from './Panel';
import data from './courses.json';

type Course = {
    id: string;
    title: string;
    category: string;
    seats: number;
    version: number;
};

const courses = data as Course[];
const categories = ['frontend', 'fullstack', 'quality'];

export default function App() {
    const [category, setCategory] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);

    const visible = category
        ? courses.filter((c) => c.category === category)
        : courses;

    return (
        <div>
            <Panel
                title="Фильтр"
                actions={<button onClick={() => setCategory(null)}>Сбросить</button>}
            >
                {categories.map((cat) => (
                    <label key={cat} style={{ marginRight: 12 }}>
                        <input
                            type="radio"
                            name="category"
                            checked={category === cat}
                            onChange={() => setCategory(cat)}
                        />
                        {cat}
                    </label>
                ))}
            </Panel>

            {visible.map((c) => (
                <Panel
                    key={c.id}
                    title={c.title}
                    actions={
                        <button onClick={() => setSelected(c.id)}>Выбрать</button>
                    }
                >
                    <p>
                        Категория: {c.category}, мест: {c.seats}
                    </p>
                </Panel>
            ))}

            <Panel title="Очень длинный заголовок панели без кнопок, который должен переноситься на следующую строку и не ломать структуру страницы совсем">
                <p>Панель без actions. Выбран курс: {selected ?? 'нет'}</p>
            </Panel>
        </div>
    );
}