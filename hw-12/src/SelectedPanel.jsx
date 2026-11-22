export function SelectedPanel({ course, inFilter, onDeselect }) {
    if (!course) return <p>Курс не выбран</p>;

    return (
        <section>
            <h3>Выбран: {course.title}</h3>
            <p>
                Категория: {course.category}, мест: {course.seats}
            </p>
            {!inFilter && <p>Курс не входит в текущий поиск, но остается выбранным</p>}
            <button onClick={onDeselect}>Снять выбор</button>
        </section>
    );
}