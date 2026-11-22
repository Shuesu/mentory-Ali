export function CourseList({
                               items,
                               selectedId,
                               favoriteIds,
                               onSelect,
                               onToggleFavorite,
                           }) {
    if (items.length === 0) return <p>Нет совпадений</p>;

    return (
        <ul>
            {items.map((c) => (
                <li key={c.id}>
                    {c.title}
                    {c.id === selectedId && ' [выбран]'}{' '}
                    <button onClick={() => onSelect(c.id)}>Выбрать</button>
                    <button onClick={() => onToggleFavorite(c.id)}>
                        {favoriteIds.includes(c.id) ? 'Убрать из избранного' : 'В избранное'}
                    </button>
                </li>
            ))}
        </ul>
    );
}