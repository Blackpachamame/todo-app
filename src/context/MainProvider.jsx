import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MainContext } from "./MainContext";
import { tasksArray } from "../assets/data/tasks";

export const MainProvider = ({ children }) => {
  const [tasks, setTasks] = useState(getInitialTask);

  function getInitialTask() {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : tasksArray;
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTask, setFilteredTask] = useState(tasks);

  const addTask = (nuevaTask) => {
    setTasks([...tasks, nuevaTask]);
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
      setFilteredTask(tasks);
    } else if (activeFilter === "active") {
      const activeTasks = tasks.filter((todo) => todo.completed === false);
      setFilteredTask(activeTasks);
    } else if (activeFilter === "completed") {
      const completedTasks = tasks.filter((todo) => todo.completed === true);
      setFilteredTask(completedTasks);
    }
  }, [activeFilter, tasks]);

  return (
    <MainContext.Provider
      value={{
        filteredTask,
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
