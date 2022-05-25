const TodosSummary = props => (
    <div>
        <span className="badge bg-info p-2 m-2">
            <em>Total:<strong>{props.completed+props.pending}</strong></em>
        </span>
        <span className="badge bg-primary p-2 m-2">
            <em>Completed:<strong>{props.completed}</strong></em>
        </span>
        <span className="badge bg-secondary p-2 m-2">
            <em>Pending:<strong>{props.pending}</strong></em>
        </span>
    </div>
);

export default TodosSummary; 