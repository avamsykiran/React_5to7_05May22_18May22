
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

    del = id => {
        let todos = this.state.todos.filter(t => t.id!==id);
        let pendingCount = todos.filter(t => t.status==='PENDING').length;
        let completedCount = todos.length - pendingCount;

        this.setState({todos,pendingCount,completedCount});
    }

    markEditable = id => {
        let todos = this.state.todos.map(t => t.id!==id?t:{...t,editable:true});
      
        this.setState({todos});
    }    
    
    unmarkEditable = id => {
        let todos = this.state.todos.map(t => t.id!==id?t:{...t,editable:undefined});
      
        this.setState({todos});
    }

    update = todo => {

        let todos =this.state.todos.map(t => t.id!==todo.id?t:{...todo,editable:undefined});
      
        let pendingCount = todos.filter(t => t.status==='PENDING').length;
        let completedCount = todos.length - pendingCount;

        this.setState({todos,pendingCount,completedCount});
    }

    render(){

        let {todos,pendingCount,completedCount} = this.state;

        return (
            <section className='col-sm-10 mx-auto '>
                <h4>Todos</h4>

                <TodosSummary completed={completedCount} pending={pendingCount}/>

                <div className="p-1">
                    <TodoForm addTodo={this.add} />
                    {todos.map(
                        todo => (
                            todo.editable?
                            <TodoForm 
                                isEditing={true} 
                                updateTodo={this.update} 
                                cancel={this.unmarkEditable}
                                todo={todo} 
                                key={todo.id} /> :
                            <TodoDetails 
                                todo={todo} 
                                key={todo.id} 
                                delTodo={this.del}
                                editTodo={this.markEditable}  />
                        )
                    )}
                </div>
            </section>
        );
    }
}

export default TodosMaster;