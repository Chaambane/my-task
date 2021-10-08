// import React from 'react';
import { FaCheck, FaTrash} from 'react-icons/fa'

// const cardTasks = (props) => {
    
//     return (
//         <div className="card d-flex flex-row p-1">
//             <div className="card-body fw-bold text-dark fs-5 p-1 me-auto ">{props.name}</div>
//             <button className="btn border border-success btnCompleted me-2" type="submit" onClick={props.completed}><FaCheck/></button>
//             <button className="btn border border-danger text-danger btnDelete" onClick={props.deleteTask}  type="submit"><FaTrash/></button>
//         </div>
//     )
// };

// export default cardTasks;

import React, {Component} from 'react';

class cardTasks extends Component {
    state = {
        completed: this.props.completed
    }

    handleCheckCompleted = () => {
        this.setState(oldState => {
            return {
                completed: !oldState.completed
            }
        })
        this.props.toggleCompleted(this.props.id)
    }

    render() {
        return (
            <div className="card d-flex flex-row p-1">
                <div className="card-body fw-bold text-dark fs-5 p-1 me-auto ">{this.props.name}</div>
                <button className={"btn border border-success btnCompleted" + (this.state.completed? "btn btn-success" : null)} type="submit" onClick={this.handleCheckCompleted}><FaCheck/></button>
                <button className="btn border border-danger text-danger btnDelete" onClick={this.props.deleteTask}  type="submit"><FaTrash/></button>
            </div>
        )
    };
}

export default cardTasks;