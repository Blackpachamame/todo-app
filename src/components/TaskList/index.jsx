import { useContext } from "react";
import { MainContext } from "../../context/Main/MainContext";
import TaskItem from "../TaskItem";
import TaskFilter from "../TaskFilter";

export default function TaskList() {
  const { filteredTask } = useContext(MainContext);

  return (
    <div className="flex flex-col bg-[white] dark:bg-dtVeryDarkDesaturatedBlue rounded-[5px] shadow-2xl">
      {filteredTask.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
      <TaskFilter />
    </div>
  );
}
