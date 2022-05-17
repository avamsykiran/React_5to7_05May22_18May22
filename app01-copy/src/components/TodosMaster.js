
import { Component } from 'react'
import '../styles/TodosMaster.css'

class TodosMaster extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id:1,task:'Pay Electricity Bill',status:'DONE'},
                {id:2,task:'Book Medicines',status:'PENDING'},
                {id:3,task:'Book Daughter`s stationary',status:'DONE'},
                {id:4,task:'Purchase Grocessaries',status:'PENDING'},
                {id:5,task:'Order Gas Cylinder',status:'DONE'},
                {id:6,task:'Repair Daughter`s scooty',status:'PENDING'},
                {id:7,task:'Order Dog Feed',status:'PENDING'},
                {id:8,task:'Order Birthday Cake',status:'DONE'}
            ],
            pendingCount:4,
            completedCount:4
        };
    }

    toggleStatus(id){

        let todos = this.state.todos.map(t => t.id!==id?t:{...t,status:(t.status==='DONE'?'PENDING':'DONE')});
        let pendingCount = todos.filter(t => t.status==='PENDING').length;
        let completedCount = todos.length - pendingCount;

        this.setState({todos,pendingCount,completedCount});
    }

    render(){

        let {todos,pendingCount,completedCount} = this.state;

        return (
            <section className='todos'>
                <h4>Todos</h4>

                <div>
                    <span>Completed Todos: <strong>{completedCount}</strong></span>
                </div>

                <div>
                    <span>Pending Todos: <strong>{pendingCount}</strong></span>
                </div>

                <ul>
                    {todos.map(
                        todo => (
                            <li 
                                key={todo.id} 
                                className={todo.status==='DONE'?'markDone':''}
                                onClick={e => this.toggleStatus(todo.id)}>
                                {todo.task}
                            </li>
                        )
                    )}
                </ul>
            </section>
        );
    }
}

export default TodosMaster;