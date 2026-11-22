import { useState } from 'react';
import { FilterPanel } from './FilterPanel';
import { CourseList } from './CourseList';
import type { Category, Course } from './types';
import data from './courses.json';

const courses = data as Course[];

export default function App() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState<Category | 'all'>('all');

    const items = courses.filter(
        (c) =>
            c.title.toLowerCase().includes(query.toLowerCase()) &&
            (category === 'all' || c.category === category),
    );

    const reset = () => {
        setQuery('');
        setCategory('all');
    };

    return (
        <div>
            <FilterPanel
                query={query}
                category={category}
                onQueryChange={setQuery}
                onCategoryChange={setCategory}
                onReset={reset}
            />
            <p>Найдено: {items.length}</p>
            <CourseList items={items} />
        </div>
    );
}