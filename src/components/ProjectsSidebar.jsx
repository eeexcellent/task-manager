export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="uppercase mb-8 font-bold text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <button className="bg-stone-700 rounded-md py-2 px-4 text-stone-400 hover:text-stone-300 hover:bg-stone-600 ">
        + Add Project
      </button>
      <ul></ul>
    </aside>
  );
}
