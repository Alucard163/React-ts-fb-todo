import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import {todosRef} from "../../firebase/firebase";

const TodoForm:React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const createTodo = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const item = {
            task: title,
            done: false,
        };
        todosRef.push(item);
        setTitle("");
    };
    return (
        <form onSubmit={createTodo}>
            <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                value={title}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                label="Введите название дела"
                variant="outlined"
            />
        </form>
    );
}
export default TodoForm;