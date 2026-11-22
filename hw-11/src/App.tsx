import { CourseList } from './CourseList';
import { FavoritesPanel } from './FavoritesPanel';
import { useFavorites } from './useFavorites';
import type { Course } from './types';
import data from './courses.json';

const courses = data as Course[];

export default function App() {
    const { ids, toggle, clear } = useFavorites();

    return (
        <div>
            <CourseList courses={courses} favoriteIds={ids} onToggle={toggle} />
            <FavoritesPanel
                courses={courses}
                favoriteIds={ids}
                onToggle={toggle}
                onClear={clear}
            />
        </div>
    );
}