import { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0, task: "", status: "PENDING" };
    }

    handleFormSubmit = event => {
        let todo = {...this.state};
        this.props.addTodo(todo);
        this.setState({ id: 0, task: "", status: "PENDING" });
        event.preventDefault();
    }

    render() {
        let { id, task, status } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="row">
                    <div className="col-2 text-end">
                        <input type="number" value={id} className="form-control" 
                        onChange={e => this.setState({id:parseInt(e.target.value)})} />
                    </div>
                    <div className="col text-center">
                        <input type="text" value={task} className="form-control" 
                        onChange={e => this.setState({task:e.target.value})} />
                    </div>
                    <div className="col-3 text-end">
                        <select value={status} className="form-control"
                        onChange={e => this.setState({status:e.target.value})} >
                            <option value="DONE">DONE</option>
                            <option value="PENDING">PENDING</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <button className='btn btn-sm btn-primary'>ADD</button>
                    </div>
                </div>
            </form>
        );
    }
};

export default TodoForm;