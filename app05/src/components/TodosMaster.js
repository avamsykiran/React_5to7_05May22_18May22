
import { Component } from 'react'
import TodosSummary from './TodosSummary'
import TodoDetails from './TodoDetails'
import TodoForm from './TodoForm'
import TodoService from '../services/TodoService';

class TodosMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: null,
            errMsg: null,
            pendingCount: 0,
            completedCount: 0
        };
    }

    loadData = () => {
        TodoService.getAll().then(
            resp => {
                let todos = resp.data;
                let pendingCount = todos.filter(t => t.status === 'PENDING').length;
                let completedCount = todos.length - pendingCount;
                let errMsg = null;
                this.setState({ todos, errMsg, pendingCount, completedCount });
            }
        ).catch(
            err => {
                console.error(err);
                this.setState({ errMsg: "Unable to load data! Please try again later!" });
            }
        );
    }

    componentDidMount() {
        this.loadData();
    }

    add = todo => {
        TodoService.add(todo).then(
            resp => this.loadData()
        ).catch(
            err => {
                console.error(err);
                this.setState({ errMsg: "Unable to save the record! Please try again later!" });
            }
        );
    }

    del = id => {
        TodoService.delById(id).then(
            resp => this.loadData()
        ).catch(
            err => {
                console.error(err);
                this.setState({ errMsg: "Unable to remove the record! Please try again later!" });
            }
        );
    }

    markEditable = id => {
        let todos = this.state.todos.map(t => t.id !== id ? t : { ...t, editable: true });

        this.setState({ todos });
    }

    unmarkEditable = id => {
        let todos = this.state.todos.map(t => t.id !== id ? t : { ...t, editable: undefined });

        this.setState({ todos });
    }

    update = todo => {
        TodoService.update({ ...todo, editable: undefined }).then(
            resp => this.loadData()
        ).catch(
            err => {
                console.error(err);
                this.setState({ errMsg: "Unable to save the record! Please try again later!" });
            }
        );
    }

    render() {

        let { todos, pendingCount, completedCount, errMsg } = this.state;

        return (
            <section className='col-sm-10 mx-auto '>
                <h4>Todos</h4>

                {
                    !todos && !errMsg &&
                    <div className='alert alert-info p-4'><strong>Please wait while we load data...</strong></div>
                }

                {
                    errMsg &&
                    <div className='alert alert-danger p-4'><strong>{ errMsg }</strong></div>
                }

                <TodosSummary completed={completedCount} pending={pendingCount} />

                <div className="p-1">
                    <TodoForm addTodo={this.add} />

                    {
                        todos && todos.length == 0 &&
                        <div className='alert alert-info p-4'><strong>No records yet!</strong></div>
                    }

                    {todos && todos.length > 0 &&
                        todos.map(
                            todo => (
                                todo.editable ?
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
                                        editTodo={this.markEditable} />
                            )
                        )}
                </div>
            </section>
        );
    }
}

export default TodosMaster;