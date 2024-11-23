import { useRef } from "react";

import ModalTwoOptions from "./ModalTwoOptions.jsx";
import Tasks from "./Tasks.jsx";

export default function ProjectSelected({
  project,
  onAddTask,
  onDelete,
  tasks,
  onClearTask,
}) {
  const modal = useRef();

  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleDeleteClick() {
    modal.current.open();
  }

  return (
    <>
      <ModalTwoOptions
        ref={modal}
        buttonCaption1="No"
        buttonCaption2="Yes"
        onClick1={() => {}}
        onClick2={onDelete}
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Are you sure?</h2>
      </ModalTwoOptions>
      <div className="w-[45rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl md:text-3xl md:mb-5 mb-2 text-stone-600">
              {project.title}
            </h2>
            <button
              onClick={handleDeleteClick}
              className="text-stone-600 hover:text-stone-950"
            >
              Delete
            </button>
          </div>
          <h3 className="mb-4 text-stone-400">{formattedDate}</h3>
          <h3 className="whitespace-pre-wrap text-stone-600">
            {project.description}
          </h3>
        </header>
        <Tasks tasks={tasks} onAdd={onAddTask} onClear={onClearTask} />
      </div>
    </>
  );
}
