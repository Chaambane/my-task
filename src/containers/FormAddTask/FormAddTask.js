import React, {Component} from 'react';

class FormAddTask extends Component {
    render() {
        return (
            <section class="container" id="formTask">
                <form>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control border-info" placeholder="Exp: Finir le projet my-task"/>
                        <button class="btn btn-info fw-bold fs-5" type="button">Créer</button>
                    </div>
                </form>
            </section>
        )
    };
}

export default FormAddTask;