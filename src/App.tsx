import { useState, ChangeEvent, FormEvent } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedTask = newTodo?.trim();
    const isDuplicate = todos.includes(trimmedTask);
    if (trimmedTask && !isDuplicate) {
      setTodos([...todos, trimmedTask]);
      setNewTodo("");
    }
  }

  function handleDelete(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center py-4">
        <h1 className="text-5xl font-bold">TodoS</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="border-b-2 border-cyan-900 outline-none w-full"
            type="text"
            value={newTodo}
            onChange={handleChange}
          />
        </form>
        <section className="my-4 w-3/5">
          <ul>
            {todos.map((item, index) => (
              <li
                className="flex justify-between items-center my-2 border-2 border-red-600 p-4 "
                key={index}
              >
                <p className="cursor-pointer">{item}</p>
                <div className="flex gap-2">
                  <AiFillEdit size={20} className="cursor-pointer" />
                  <AiFillDelete
                    onClick={() => handleDelete(index)}
                    size={20}
                    className="cursor-pointer"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
