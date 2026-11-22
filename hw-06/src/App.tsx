import { useState } from 'react';
import { ControlledFilter } from './ControlledFilter';
import { UncontrolledFilter } from './UncontrolledFilter';
import data from './courses.json';

type Course = { id: string; title: string };
const courses = data as Course[];

export default function App() {
    const [controlledQuery, setControlledQuery] = useState('');
    const [uncontrolledQuery, setUncontrolledQuery] = useState('');

    const filter = (q: string) =>
        courses.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));

    return (
        <div>
            <ControlledFilter onApply={setControlledQuery} />
            <ul>
                {filter(controlledQuery).map((c) => (
                    <li key={c.id}>{c.title}</li>
                ))}
            </ul>

            <UncontrolledFilter onApply={setUncontrolledQuery} />
            <ul>
                {filter(uncontrolledQuery).map((c) => (
                    <li key={c.id}>{c.title}</li>
                ))}
            </ul>
        </div>
    );
}