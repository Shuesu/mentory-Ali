import { useCallback, useMemo, useState } from 'react';
import { CourseChooser } from './CourseChooser';
import type { Course } from './types';
import data from './courses.json';

const courses = data as Course[];

export default function App() {
    const [count, setCount] = useState(0);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [stableCallback, setStableCallback] = useState(false);
    const [stableOptions, setStableOptions] = useState(true);

    const addId = (id: string) =>
        setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

    const memoSelect = useCallback((id: string) => {
        setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }, []);

    const memoOptions = useMemo(() => ({ showSeats: true }), []);

    const onSelect = stableCallback ? memoSelect : addId;
    const options = stableOptions ? memoOptions : { showSeats: true };

    console.log('[App] render, count =', count);

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Счетчик: {count}</button>
            <label>
                <input
                    type="checkbox"
                    checked={stableCallback}
                    onChange={(e) => setStableCallback(e.target.checked)}
                />
                useCallback
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={stableOptions}
                    onChange={(e) => setStableOptions(e.target.checked)}
                />
                стабильный options
            </label>

            <ul>
                {courses.map((c) => (
                    <CourseChooser
                        key={c.id}
                        course={c}
                        onSelect={onSelect}
                        options={options}
                    />
                ))}
            </ul>
            <p>Выбрано: {selectedIds.join(', ') || 'ничего'}</p>
        </div>
    );
}