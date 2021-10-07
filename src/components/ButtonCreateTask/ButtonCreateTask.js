import React from 'react';
import { FaList } from 'react-icons/fa'

const buttonCreateTask = (props) => (
    <div className="container m-1">
        <button className="btn btn-info btn-large fw-bold fs-5" onClick={props.clic}><FaList/> Créer une tâche</button>
    </div>
);

export default buttonCreateTask;