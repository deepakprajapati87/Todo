import { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem";
import axios from "axios";

export const TodoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:5000/tasks');
            setTasks(res.data);

        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }


    const addTask = async () => {
        if (!title) return;
        try {
            await axios.post('http://localhost:5000/tasks', { title });
            setTitle('');
            fetchTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }


    const toggleComplete = async (id) => {
        try {
            await axios.put(`http://localhost:5000/tasks/${id}`);
            fetchTasks();
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${id}`);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
                <h2>To-Do App</h2>

                <input value={title} onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Task" style={{ width: '70%', padding: 8 }} />

                <button onClick={addTask} style={{ padding: 8, marginLeft: 10 }}>Add</button>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tasks.map((task) => (

                        <TaskItem key={task._id} task={task} onToggle={toggleComplete}
                            onDelete={deleteTask} />

                    ))}
                </ul>

            </div>
        </>
    )
}