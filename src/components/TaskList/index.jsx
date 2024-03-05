import { useContext } from "react";
import { MainContext } from "../../context/Main/MainContext";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import TaskItem from "../TaskItem";
import TaskFilter from "../TaskFilter";

export default function TaskList() {
  const { filteredTask, setFilteredTask, setTasks } = useContext(MainContext);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = (e) => {
    const { active, over } = e;

    const oldIndex = filteredTask.findIndex((task) => task.id === active.id);
    const newIndex = filteredTask.findIndex((task) => task.id === over.id);

    const newOrder = arrayMove(filteredTask, oldIndex, newIndex);
    setFilteredTask(newOrder);
    setTasks(newOrder);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement]}
      sensors={sensors}
    >
      <div className="flex flex-col bg-[white] dark:bg-dtVeryDarkDesaturatedBlue rounded-[5px] shadow-2xl">
        <SortableContext
          items={filteredTask}
          strategy={verticalListSortingStrategy}
        >
          {filteredTask.map((todo) => (
            <TaskItem key={todo.id} todo={todo} />
          ))}
        </SortableContext>
        <TaskFilter />
      </div>
    </DndContext>
  );
}
