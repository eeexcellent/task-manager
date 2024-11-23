import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ title, textarea, ...props }, ref) {
  const inputRef = useRef();
  
    const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  
  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return inputRef.current.value.trim();
      },
    };
  });

  return (
    <p className="flex flex-col">
      <label htmlFor={title} className="text-sm font-bold uppercase text-stone-500">
        {title}
      </label>
      {textarea ? (
        <textarea id={title} className={inputClasses} ref={inputRef} {...props} />
      ) : (
        <input id={title} className={inputClasses} ref={inputRef} {...props} />
      )}
    </p>
  );
});

export default Input;
