import { useContext } from "react";
import { MainContext } from "./../../context/MainContext";
import TaskItem from "../TaskItem";
import TaskFilter from "../TaskFilter";

export default function TaskList() {
  const { tasks } = useContext(MainContext);

  return (
    <div className="flex flex-col bg-[white] dark:bg-dtVeryDarkDesaturatedBlue rounded-[5px] shadow-2xl">
      {tasks.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
      <TaskFilter />
    </div>
  );
}
