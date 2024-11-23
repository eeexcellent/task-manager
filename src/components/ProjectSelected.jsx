import Tasks from "./Tasks.jsx";

export default function ProjectSelected({ project, onAddTask, onDelete, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[45rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl md:text-3xl md:mb-5 mb-2 text-stone-600">
            {project.title}
          </h2>
          <button
            onClick={() => onDelete(project.projectId)}
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
      <Tasks tasks={tasks} onAdd={onAddTask} />
    </div>
  );
}
