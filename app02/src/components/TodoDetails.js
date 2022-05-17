const TodoDetails = props => (
    <div className="row border-bottom">
        <div className="col-2 text-end">
            {props.todo.id}
        </div>
        <div className="col text-center">
            {props.todo.task}
        </div>
        <div className="col-3 text-end">
            {props.todo.status}
        </div>
        <div className="col-2">
            <button className='btn btn-sm btn-secondary'>EDIT</button>
            <button className='btn btn-sm btn-danger'>DELETE</button>
        </div>
    </div>
);

export default TodoDetails;