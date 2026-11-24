const TodoStats = ({ total, completed, active, onClearCompleted }) => {
  return (
    <div className="stats">
      <div className="counts">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Active: {active}</p>
      </div>
      {completed > 0 && (
        <button className="clear" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoStats;