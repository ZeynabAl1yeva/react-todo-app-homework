const filters = ["All", "Active", "Completed"];

const TodoFilter = ({ filter, onChange }) => {
  return (
    <div className="filters">
      {filters.map((item) => (
        <button
          key={item}
          className={filter === item ? "filter active" : "filter"}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;