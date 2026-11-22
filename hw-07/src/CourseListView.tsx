import type { Course } from './types';

type Props = {
    items: Course[];
    emptyText: string;
    onSelect: (id: string) => void;
};

export function CourseListView({ items, emptyText, onSelect }: Props) {
    if (items.length === 0) return <p>{emptyText}</p>;

    return (
        <ul>
            {items.map((c) => (
                <li key={c.id}>
                    {c.title} ({c.seats} мест){' '}
                    <button onClick={() => onSelect(c.id)}>Выбрать</button>
                </li>
            ))}
        </ul>
    );
}