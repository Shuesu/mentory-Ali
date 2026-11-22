export function FavoritesPanel({ favorites, onToggle, onClear }) {
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
                Очистить избранное
            </button>
        </aside>
    );
}