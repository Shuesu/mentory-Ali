import { CatalogContainer } from './CatalogContainer';
import { CourseListView } from './CourseListView';
import type { Course } from './types';
import data from './courses.json';

const courses = data as Course[];

export default function App() {
    return (
        <div>
            <h2>Контейнер</h2>
            <CatalogContainer />

            <h2>Представление: полный список</h2>
            <CourseListView
                items={courses}
                emptyText="Пусто"
                onSelect={(id) => console.log('select', id)}
            />

            <h2>Представление: пустой массив</h2>
            <CourseListView
                items={[]}
                emptyText="Курсов пока нет"
                onSelect={(id) => console.log('select', id)}
            />
        </div>
    );
}