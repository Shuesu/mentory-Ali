import type { Course } from './types';

type Props = { items: Course[] };

export function CourseList({ items }: Props) {
    if (items.length === 0) return <p>Нет совпадений</p>;

    return (
        <ul>
            {items.map((c) => (
                <li key={c.id}>
                    {c.title} ({c.category})
                </li>
            ))}
        </ul>
    );
}