import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

const initialTodos = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Practice useState", completed: false },
  { id: 3, title: "Build React components", completed: true },
  { id: 4, title: "Practice useEffect", completed: false },
  { id: 5, title: "Complete homework", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    if (saved === null) {
      return initialTodos;
    }
    return JSON.parse(saved);
  });
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: title };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") {
      return !todo.completed;
    }
    if (filter === "Completed") {
      return todo.completed;
    }
    return true;
  });
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;
  return (
    <div className="app">
      <Header />
      <TodoForm onAdd={addTodo} />
      <TodoFilter filter={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      <TodoStats
        total={todos.length}
        completed={completedCount}
        active={activeCount}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;