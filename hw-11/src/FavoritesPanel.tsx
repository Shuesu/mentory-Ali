import type { Course } from './types';

type Props = {
    courses: Course[];
    favoriteIds: string[];
    onToggle: (id: string) => void;
    onClear: () => void;
};

export function FavoritesPanel({
                                   courses,
                                   favoriteIds,
                                   onToggle,
                                   onClear,
                               }: Props) {
    const favorites = courses.filter((c) => favoriteIds.includes(c.id));

    return (
        <aside>
            <h3>Избранное: {favorites.length}</h3>
            {favorites.length === 0 ? (
                <p>Пока пусто</p>
            ) : (
                <ul>
                    {favorites.map((c) => (
                        <li key={c.id}>
                            {c.title} <button onClick={() => onToggle(c.id)}>x</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={onClear} disabled={favorites.length === 0}>
                Очистить
            </button>
        </aside>
    );
}