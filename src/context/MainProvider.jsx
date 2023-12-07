import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MainContext } from "./MainContext";
import tasksArray from "../assets/data/tasks";

export const MainProvider = ({ children }) => {
  const [tasks, setTasks] = useState(getInitialTask);

  function getInitialTask() {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : tasksArray;
  }

  const [activeFilter, setActiveFilter] = useState("all");

  const addTask = (title) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 1;

    const newTask = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...tasks];
    todoList.push(newTask);

    setTasks(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = tasks.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTasks(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = tasks.filter((todo) => !todo.completed);
    setTasks(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = tasks.filter((todo) => todo.id !== id);
    setTasks(updatedList);
  };

  const showAllTasks = () => {
    setActiveFilter("all");
  };

  const showActiveTasks = () => {
    setActiveFilter("active");
  };

  const showCompletedTasks = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setTasks(tasks);
    } else if (activeFilter === "active") {
      const activeTasks = tasks.filter((todo) => todo.completed === false);
      setTasks(activeTasks);
    } else if (activeFilter === "completed") {
      const completedTasks = tasks.filter((todo) => todo.completed === true);
      setTasks(completedTasks);
    }
  }, [activeFilter, tasks]);

  return (
    <MainContext.Provider
      value={{
        tasks,
        activeFilter,
        addTask,
        showAllTasks,
        showActiveTasks,
        showCompletedTasks,
        handleSetComplete,
        handleDelete,
        handleClearComplete,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.any,
};
