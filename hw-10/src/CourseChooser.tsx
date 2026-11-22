import { memo } from 'react';
import type { Course, Options } from './types';

type Props = {
    course: Course;
    onSelect: (id: string) => void;
    options: Options;
};

export const CourseChooser = memo(function CourseChooser({
                                                             course,
                                                             onSelect,
                                                             options,
                                                         }: Props) {
    console.log('[Chooser] render', course.id);

    return (
        <li>
            {course.title}
            {options.showSeats && ` (мест: ${course.seats})`}{' '}
            <button onClick={() => onSelect(course.id)}>Выбрать</button>
        </li>
    );
});