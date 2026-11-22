import raw from './courses.json';
import type { Course } from './types';

const base = raw as Course[];

export const items: Course[] = Array.from({ length: 2000 }, (_, i) => {
    const c = base[i % base.length];
    return { ...c, id: `${c.id}-${i}`, seats: (c.seats + i) % 50 };
});