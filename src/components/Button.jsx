export default function Button({ children, ...props }) {
  return (
    <button
      className="px-6 py-2 mr-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
