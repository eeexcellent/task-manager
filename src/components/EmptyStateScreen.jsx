import NoProjectsImage from "../assets/no-projects.png";

export default function EmptyStateScreen() {
  return (
    <main className="m-auto flex flex-col items-center">
      <img
        src={NoProjectsImage}
        className="md:size-24 size-20 mb-5"
        alt="Empty notes abstract image"
      />
      <h2 className="font-bold text-2xl md:text-3xl md:mb-5 mb-2 text-stone-600">No Project Selected</h2>
      <h3 className="font-semibold md:text-xl text-stone-500 md:mb-10 mb-5">Select a project or get started with a new one</h3>
      <button className="md:px-5 md:py-3 px-3 py-2 rounded-md text-stone-400 bg-stone-700 font-semibold md:text-xl hover:bg-stone-600">Create new project</button>
    </main>
  );
}
