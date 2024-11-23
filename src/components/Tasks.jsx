import { useState } from "react";

export default function Tasks({ tasks, onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  const inputClasses =
    "w-72 p-1 rounded-sm border-stone-300 bg-stone-200 focus:outline-sky-700 focus:border-stone-600";

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex gap-4 mb-3">
        <input
          className={inputClasses}
          value={enteredTask}
          onChange={handleChange}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
