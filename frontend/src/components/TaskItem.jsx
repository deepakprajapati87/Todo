export const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <>
            <li style={{ marginTop: 10 }}>
                <span onClick={() => onToggle(task._id)}
                    style={{
                        textDecoration: task.completed ? 'line-through' : 'none',
                        cursor: 'pointer'
                    }}>
                    {task.title}
                </span>
                <button onClick={() => onDelete(task._id)} style={{ marginLeft: 10 }} >❌</button>
            </li>
        </>
    )
}