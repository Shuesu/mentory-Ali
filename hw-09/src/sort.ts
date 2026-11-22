import type { Course } from './types';

export type Dir = 'asc' | 'desc';
export type SortKey = 'title' | 'seats';

export function sortCourses(list: Course[], key: SortKey, dir: Dir) {
    const k = dir === 'asc' ? 1 : -1;
    return [...list].sort((a, b) =>
        key === 'title'
            ? k * a.title.localeCompare(b.title, 'ru')
            : k * (a.seats - b.seats),
    );
}

export function timed<T>(label: string, fn: () => T): T {
    const t = performance.now();
    const result = fn();
    console.log(label, (performance.now() - t).toFixed(2), 'ms');
    return result;
}