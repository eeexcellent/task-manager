export default function ProjectsSidebar({
  onStartAddProject,
  onSelectProject,
  projects,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl overflow-y-auto">
      <h2 className="uppercase mb-8 font-bold text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <button
        onClick={onStartAddProject}
        className="bg-stone-700 rounded-md py-2 px-4 mb-8 text-stone-400 hover:text-stone-300 hover:bg-stone-600"
      >
        + Add Project
      </button>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.projectId}>
              <button
                onClick={() => onSelectProject(project.projectId)}
                className="w-full text-left px-3 py-2 rounded-sm text-stone-400 hover:bg-stone-800 hover:text-white"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
