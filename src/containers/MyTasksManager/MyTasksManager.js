import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TitleH1 from '../../components/TitleH1/TitleH1';
import CardTasks from '../../components/CardTasks/CardTasks';
import FormAddTask from '../FormAddTask/FormAddTask';

class MyTasksManager extends Component {
    state = {
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
                    <CardTasks clic= {() => this.handleDisplayForm()}/>
                    {this.state.addTask && <FormAddTask/>}
                </main>
            </>
        )
    };
}

export default MyTasksManager;