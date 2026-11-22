import { useState } from 'react';
import { CourseList } from './CourseList';
import { SelectedPanel } from './SelectedPanel';
import { FavoritesPanel } from './FavoritesPanel';
import { useFavorites } from './useFavorites';
import courses from './courses.json';

export default function App() {
    const [query, setQuery] = useState('');
    const [selectedId, setSelectedId] = useState(null);
    const [note, setNote] = useState('');
    const favorites = useFavorites();

    const items = courses.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase()),
    );
    const selectedCourse = courses.find((c) => c.id === selectedId) ?? null;
    const selectedInFilter = items.some((c) => c.id === selectedId);
    const favoriteCourses = courses.filter((c) => favorites.ids.includes(c.id));

    return (
        <div>
            <input
                placeholder="Поиск"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => setQuery('')}>Сбросить поиск</button>
            <p>
                Найдено: {items.length} из {courses.length}
            </p>

            <CourseList
                items={items}
                selectedId={selectedId}
                favoriteIds={favorites.ids}
                onSelect={setSelectedId}
                onToggleFavorite={favorites.toggle}
            />

            <SelectedPanel
                course={selectedCourse}
                inFilter={selectedInFilter}
                onDeselect={() => setSelectedId(null)}
            />
            <FavoritesPanel
                favorites={favoriteCourses}
                onToggle={favorites.toggle}
                onClear={favorites.clear}
            />

            <label>
                Моя заметка
                <input value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
        </div>
    );
}