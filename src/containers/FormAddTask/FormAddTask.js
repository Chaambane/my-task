import React, {Component} from 'react';

class FormAddTask extends Component {
    state={
        newTask: ""
    }

    handleOnSubmitTask = (e) => {
        e.preventDefault();
        console.log(this.state.newTask);
    }
    render() {
        return (
            <section className="container p-2" id="formTask">
                <form className="form">
                    <div className="input-group mb-3">
                        <input type="text" 
                            className="form-control border-info" 
                            placeholder="Exp: Finir le projet my-task"
                            onChange={(e) => this.setState({newTask: e.target.value})}
                            value={this.state.newTask}
                        />
                        <button className="btn btn-info fw-bold fs-5" type="button" onClick={this.handleOnSubmitTask}>Créer</button>
                    </div>
                </form>
            </section>
        )
    };
}

export default FormAddTask;