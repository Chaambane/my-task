import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import CardTasks from '../../components/CardTasks/CardTasks';
import FormAddTask from '../FormAddTask/FormAddTask';
import ButtonCreateTask from '../../components/ButtonCreateTask/ButtonCreateTask';
import uniqid from 'uniqid';

class MyTasksManager extends Component {
    state = {
        tasksList: [
            {id:"gipmzfg2", name:"Finir my-tasks", completed: false},
        ],
        addTask: false
    }

    handleToggleCompleted = (id) => {
        let idTaskUpdate = this.state.tasksList.find(t => t.id === id);

        idTaskUpdate.completed = !idTaskUpdate.completed;

        this.setState(oldState => {
            oldState.tasksList.map(task => {
                return task.id === id? idTaskUpdate : task
            })
        });
    }

    handleDisplayForm = () => {
        this.setState(oldState => {
            return{
                addTask: !oldState.addTask
            }
        })
    }

    handleCreateTask = (task) => {
        const newTask = {
            id: uniqid(),
            name: task,
            completed: false
        }

        const newTasksList = [...this.state.tasksList];

        newTasksList.push(newTask);

        // console.log(newTasksList);

        this.setState({
            tasksList: newTasksList,
            addTask: false
        });
    }

    handleDeleteTask = (id) => {
        const idTask = this.state.tasksList.findIndex(t => {
            return t.id === id
        });

        const newTasksList = [...this.state.tasksList];

        newTasksList.splice(idTask, 1);

        this.setState({tasksList: newTasksList});

    }

    render() {
        return (
            <>
                <main className="container mt-4 mb-2 p-2" id="main">
                    <TitleH1>Liste de tâches</TitleH1>
                    {
                        this.state.tasksList.map(task => {
                            return(
                                <section className="container m-1 mb-2" id="cardTask" key={task.id}>
                                    <CardTasks
                                        {...task}
                                        deleteTask = {() => this.handleDeleteTask(task.id)}
                                        toggleCompleted ={this.handleToggleCompleted}
                                    />
                                </section>
                            )
                        })
                    }
                    <ButtonCreateTask clic= {() => this.handleDisplayForm()}/>
                    {this.state.addTask && <FormAddTask createTask = {this.handleCreateTask}/>}
                </main>
            </>
        )
    };
}

export default MyTasksManager;