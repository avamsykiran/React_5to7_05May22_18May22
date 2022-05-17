
import { Component } from 'react'
import TodosSummary from './TodosSummary'
import TodoDetails from './TodoDetails'
import TodoForm from './TodoForm'

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

    add = todo => {

        let todos = [...this.state.todos,todo];
        let pendingCount = todos.filter(t => t.status==='PENDING').length;
        let completedCount = todos.length - pendingCount;

        this.setState({todos,pendingCount,completedCount});
    }

    render(){

        let {todos,pendingCount,completedCount} = this.state;

        return (
            <section className='todos'>
                <h4>Todos</h4>

                <TodosSummary completed={completedCount} pending={pendingCount}/>

                <div className="p-1">
                    <TodoForm addTodo={this.add} />
                    {todos.map(
                        todo => <TodoDetails todo={todo} key={todo.id} />
                    )}
                </div>
            </section>
        );
    }
}

export default TodosMaster;