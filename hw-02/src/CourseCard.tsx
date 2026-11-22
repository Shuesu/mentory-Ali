export type Course = {
    id: string;
    title: string;
    category: 'frontend' | 'fullstack' | 'quality';
    seats: number;
    version: number;
};

type Props = {
    course: Course;
    selected: boolean;
    onSelect: (id: string) => void;
};

export function CourseCard({ course, selected, onSelect }: Props) {
    console.log('[CourseCard] render', course.id);

    return (
        <div>
            <h3>
                {course.title} {selected && '✓'}
            </h3>
            <button onClick={() => onSelect(course.id)}>Выбрать</button>
        </div>
    );
}