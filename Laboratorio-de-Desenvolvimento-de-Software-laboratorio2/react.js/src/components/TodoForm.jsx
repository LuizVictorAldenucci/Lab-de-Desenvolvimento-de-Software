import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedValue = value.trim();
        if (trimmedValue) {
            addTodo(trimmedValue);
            setValue('');
        }
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder="Descrição da Tarefa"
            />
            <button type="submit" className='todo-btn'>Adicionar Tarefa</button>
        </form>
    );
};