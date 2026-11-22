import type { Course } from './types';

type Props = {
    courses: Course[];
    favoriteIds: string[];
    onToggle: (id: string) => void;
};

export function CourseList({ courses, favoriteIds, onToggle }: Props) {
    return (
        <ul>
            {courses.map((c) => {
                const fav = favoriteIds.includes(c.id);
                return (
                    <li key={c.id}>
                        {c.title}{' '}
                        <button onClick={() => onToggle(c.id)}>
                            {fav ? 'Убрать из избранного' : 'В избранное'}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}