import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div className="bg-blue-700 text-white p-4">
      <div>Count: {count()}</div>
      <button onClick={() => setCount(count() + 1)}>Add here</button>
    </div>
  );
};
