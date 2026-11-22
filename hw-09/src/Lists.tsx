import { useMemo } from 'react';
import { items } from './data';
import { sortCourses, timed, type Dir, type SortKey } from './sort';
import type { Course } from './types';

type Props = { sortKey: SortKey; dir: Dir };

function Preview({ title, sorted }: { title: string; sorted: Course[] }) {
    return (
        <div>
            <h3>{title}</h3>
            <ol>
                {sorted.slice(0, 5).map((c) => (
                    <li key={c.id}>
                        {c.title} ({c.seats})
                    </li>
                ))}
            </ol>
        </div>
    );
}

export function PlainList({ sortKey, dir }: Props) {
    const sorted = timed('plain', () => sortCourses(items, sortKey, dir));
    return <Preview title="Без useMemo" sorted={sorted} />;
}

export function MemoList({ sortKey, dir }: Props) {
    const sorted = useMemo(
        () => timed('memo', () => sortCourses(items, sortKey, dir)),
        [sortKey, dir],
    );
    return <Preview title="С useMemo" sorted={sorted} />;
}