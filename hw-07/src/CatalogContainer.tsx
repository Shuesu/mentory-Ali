import { useState } from 'react';
import { CourseListView } from './CourseListView';
import type { Course } from './types';
import data from './courses.json';

const courses = data as Course[];

export function CatalogContainer() {
    const [query, setQuery] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const items = courses.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <div>
            <input
                placeholder="Поиск"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <p>Выбран: {selectedId ?? 'нет'}</p>
            <CourseListView
                items={items}
                emptyText="Ничего не найдено"
                onSelect={setSelectedId}
            />
        </div>
    );
}