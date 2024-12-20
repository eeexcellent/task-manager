import NoProjectsImage from "../assets/no-projects.png";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="m-auto flex flex-col items-center">
      <img
        src={NoProjectsImage}
        className="md:size-24 size-20 mb-5"
        alt="Empty notes abstract image"
      />
      <div class="text-5xl font-extrabold mb-3">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-950 to-yellow-500">
          No Project Selected
        </span>
      </div>
      <h3 className="font-semibold md:text-xl text-stone-500 md:mb-10 mb-5">
        Select a project or get started with a new one
      </h3>
      <button
        onClick={onStartAddProject}
        className="md:px-5 md:py-3 px-3 py-2 rounded-md text-stone-400 bg-stone-700 font-semibold md:text-xl hover:bg-stone-600"
      >
        Create new project
      </button>
    </div>
  );
}
