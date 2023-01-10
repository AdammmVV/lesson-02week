import React from 'react';
import {filterTasksType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    filterTasks: (b: filterTasksType) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(li => {
                return (
                    <li key={li.id}>
                        <button onClick={() => props.removeTask(li.id)}>X</button>
                        <input type="checkbox" checked={li.isDone}/> <span>{li.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => props.filterTasks('all')}>All</button>
            <button onClick={() => props.filterTasks('active')}>Active</button>
            <button onClick={()=> props.filterTasks('completed')}>Completed</button>
        </div>
    </div>
}
