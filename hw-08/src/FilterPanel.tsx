import type { Category } from './types';

type Props = {
    query: string;
    category: Category | 'all';
    onQueryChange: (value: string) => void;
    onCategoryChange: (value: Category | 'all') => void;
    onReset: () => void;
};

export function FilterPanel({
                                query,
                                category,
                                onQueryChange,
                                onCategoryChange,
                                onReset,
                            }: Props) {
    return (
        <div>
            <input
                placeholder="Поиск по названию"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
            />
            <select
                value={category}
                onChange={(e) => onCategoryChange(e.target.value as Category | 'all')}
            >
                <option value="all">Все категории</option>
                <option value="frontend">frontend</option>
                <option value="fullstack">fullstack</option>
                <option value="quality">quality</option>
            </select>
            <button onClick={onReset}>Сбросить</button>
        </div>
    );
}