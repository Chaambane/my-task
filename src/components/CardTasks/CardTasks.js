import React from 'react';
import { FaCheck, FaTrash} from 'react-icons/fa'

const cardTasks = (props) => (
    <>
        <div className="card d-flex flex-row p-1">
            <div className="card-body fw-bold text-dark fs-5 p-1 me-auto">{props.name}</div>
            <button className="btn border border-success btnCompleted me-2" type="submit"><FaCheck/></button>
            <button className="btn border border-danger text-danger btnDelete " type="submit"><FaTrash/></button>
        </div>
    </>
);

export default cardTasks;