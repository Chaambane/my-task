import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TitleH1 from '../../components/TitleH1/TitleH1';
import CardTasks from '../../components/CardTasks/CardTasks';
import FormAddTask from '../FormAddTask/FormAddTask';
import ButtonCreateTask from '../../components/ButtonCreateTask/ButtonCreateTask';
import DataStorage from '../../DataStorage';

class MyTasksManager extends Component {
    state = {
        tasksList: DataStorage,
        addTask: false
    }

    handleDisplayForm = () => {
        this.setState(oldState => {
            return{
                addTask: !oldState.addTask
            }
        })
    }

    render() {
        return (
            <>
                <NavBar/>
                <main className="container mt-4 mb-2 p-2" id="main">
                    <TitleH1>Liste de tâches</TitleH1>
                    {
                        this.state.tasksList.map(task => {
                            return(
                                <section className="container m-1 mb-2" id="cardTask" key={task.id}>
                                    <CardTasks
                                        {...task}
                                    />
                                </section>
                            )
                        })
                    }
                    <ButtonCreateTask clic= {() => this.handleDisplayForm()}/>
                    {this.state.addTask && <FormAddTask/>}
                </main>
            </>
        )
    };
}

export default MyTasksManager;