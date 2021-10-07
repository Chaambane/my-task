import React from 'react';
import { FaCheck, FaTrash, FaList } from 'react-icons/fa'

const cardTasks = (props) => (
    <section className="container m-1 mb-2" id="cardTask">
        <div className="card d-flex flex-row p-1">
            <div className="card-body fw-bold text-dark fs-5 p-1 me-auto">Finir my-tasks</div>
            <button className="btn border border-success btnCompleted me-2" type="submit"><FaCheck/></button>
            <button className="btn border border-danger text-danger btnDelete " type="submit"><FaTrash/></button>
        </div>
        <div className="card d-flex flex-row p-1 mt-1">
            <div className="card-body fw-bold text-dark fs-5 p-1 me-auto">Retravailler App météo</div>
            <button className="btn border border-success btnCompleted me-2" type="submit"><FaCheck/></button>
            <button className="btn border border-danger text-danger btnDelete " type="submit"><FaTrash/></button>
        </div>
        <div className="mt-2">
            <button className="btn btn-info btn-large fw-bold fs-5" onClick={props.clic}><FaList/> Créer une tâche</button>
        </div>
    </section>
);

export default cardTasks;