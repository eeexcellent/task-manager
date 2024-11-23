import { useState } from "react";


export default function AddTask({ onAdd }) {
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
  );
}
