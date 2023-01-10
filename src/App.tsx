import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterTasksType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ])

    let [filter, setFilter] = useState<filterTasksType>('all')

    function filterTasks(nameButton: filterTasksType) {
        setFilter(nameButton)
    }
    let filterTasksButton = tasks
    if (filter === 'active') {
        filterTasksButton = tasks.filter(t => {
            return (
                t.isDone
            )
        })
    }
    if (filter === 'completed') {
        filterTasksButton = tasks.filter(t => {
            return (
                !t.isDone
            )
        })
    }


    function removeTask(id: number) {
        setTasks(tasks.filter(t => {
            return (
                t.id !== id
            )
        }))
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filterTasksButton}
                      removeTask={removeTask}
                      filterTasks={filterTasks}/>
        </div>
    );
}

export default App;
