import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import ToggleTheme from "./components/ToggleTheme";
import TaskForm from "./components/TaskForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete online JavaScript course",
      completed: true,
    },
    {
      id: 2,
      title: "Jog around the park 3x",
      completed: false,
    },
    {
      id: 3,
      title: "10 minutes meditation",
      completed: false,
    },
    {
      id: 4,
      title: "Read for 1 hour",
      completed: false,
    },
    {
      id: 5,
      title: "Pick up groceries",
      completed: false,
    },
    {
      id: 6,
      title: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);

    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <main className="w-full min-h-screen text-lg font-normal text-dtVeryDarkDesaturatedBlue dark:text-lightGrayishBlue grid justify-items-center items-center px-6 py-12 md:px-8 bg-mobile-light bg-veryLightGray dark:bg-dtVeryDarkBlue dark:bg-mobile-dark min-[376px]:bg-desktop-light min-[376px]:dark:bg-desktop-dark bg-contain min-[376px]:bg-auto bg-top bg-no-repeat">
      <section className="w-full max-w-[540px] flex flex-col">
        <ToggleTheme />
        <TaskForm addTodo={addTodo} />
        <TaskList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
        />
        <p className="mt-12 text-center text-dtDarkGrayishBlue">
          Drag and drop to reorder list
        </p>
      </section>
    </main>
  );
}

export default App;
