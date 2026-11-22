import { useState } from 'react';
import { CourseCard, type Course } from './CourseCard';
import data from './courses.json';

const KEY = 'selected-course';
const courses = data as Course[];

export default function App() {
    const [selectedId, setSelectedId] = useState<string | null>(() =>
        localStorage.getItem(KEY),
    );
    const [tick, setTick] = useState(0);

    const handleSelect = (id: string) => {
        localStorage.setItem(KEY, id);
        console.log('[localStorage] write:', id);
        setSelectedId(id);
    };

    console.log('[App] render, tick =', tick);

    return (
        <div>
            <h1>Курсы</h1>
            <button onClick={() => setTick((t) => t + 1)}>
                Перерисовать ({tick})
            </button>
            <p>Выбран: {selectedId ?? 'ничего'}</p>

            {courses.map((c) => (
                <CourseCard
                    key={c.id}
                    course={c}
                    selected={c.id === selectedId}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
}