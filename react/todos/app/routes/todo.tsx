import AddTask from "~/assets/icons/addTaskIcon";
import type { Route } from "./+types/todo";
import CheckIcon from "~/assets/icons/checkIcon";
import EditIcon from "~/assets/icons/editIcon";
import DeleteIcon from "~/assets/icons/deleteIcon";
import { useState } from "react";
import { createTodo, updateTodo, deleteTodo, toggleTodo, type Todo, } from "~/model/todoModel";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Todos list | Todo" },
    { name: "description", content: "Todo list write your todos and manage them!" },
  ];
}

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Design system update", isCompleted: false, category: "WORK" },
    { id: 2, title: "Morning standup meeting", isCompleted: true },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = createTodo(newTodoTitle)
      setTodos([...todos, newTodo])
      setNewTodoTitle("")
    }
  }

  const startEdit = (id: number, title: string) => {
    setEditingId(id);
    setEditingTitle(title);
  }

  const saveEdit = () => {
    if (editingTitle.trim() && editingId !== null) {
      handleEditTodo(editingId, editingTitle);
      setEditingId(null);
      setEditingTitle("");
    }
  }

  const cancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  }

  const handleEditTodo = (id: number, title: string) => {
    setTodos(todos.map((todo) => todo.id === id ? updateTodo(todo, title) : todo))
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(deleteTodo(todos, id))
  }

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? toggleTodo(todo) : todo))
  }

  const activeTodo = todos.filter((todo) => !todo.isCompleted)
  const completedTodo = todos.filter((todo) => todo.isCompleted)


  return (
    <>
      <main className="p-4 rounded-xl border shadow-lg bg-primary border-black dark:border-gray-50 ">
        <section className="py-4">
          <div className="text-primary text-left">
            <h1 className="text-4xl font-bold">Today <span className="text-sm text-gray-500">Wed 25 Oct</span></h1>
          </div>
        </section>

        <section className="py-4">
          <div className="group">
            <label className="flex items-center w-full h-12 md:h-14 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-primary transition-all overflow-hidden cursor-text">
              <div className="pl-4 pr-3 text-primary">
                <AddTask />
              </div>
              <input type="text" placeholder="Add a new task..." className="w-full h-full text-primary placeholder:text-slate-400 focus:ring-0 focus:outline-none"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
              />
              <div className="pr-2">
                <button className="cursor-pointer btn-primary opacity-0 group-focus-within:opacity-100 duration-200"
                  onClick={addTodo}
                >Add</button>
              </div>
            </label>
          </div>
        </section>

        {activeTodo.map((todo) => (
          <section key={todo.id} className="py-4">
            {editingId === todo.id ? (
              <div className="flex flex-row text-primary items-center gap-3 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none size-5 border-2 border-slate-300 dark:border-slate-600 rounded-full cursor-pointer transition-all hover:border-blue-400 checked:bg-blue-500 checked:border-blue-500"
                    checked={todo.isCompleted}
                    onChange={() => handleToggleTodo(todo.id)}
                  />
                  <div className="absolute pointer-events-none hidden peer-checked:block">
                    <CheckIcon />
                  </div>
                </div>

                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                  className="flex-1 px-2 py-1 text-primary bg-slate-100 dark:bg-slate-700 rounded border border-blue-500 focus:outline-none"
                  autoFocus
                />

                <div className="flex items-center gap-2 ml-auto">
                  <button onClick={saveEdit} className="cursor-pointer px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                    Save
                  </button>
                  <button onClick={cancelEdit} className="cursor-pointer px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-row text-primary items-center gap-3 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none size-5 border-2 border-slate-300 dark:border-slate-600 rounded-full cursor-pointer transition-all hover:border-blue-400 checked:bg-blue-500 checked:border-blue-500"
                    checked={todo.isCompleted}
                    onChange={() => handleToggleTodo(todo.id)}
                  />
                  <div className="absolute pointer-events-none hidden peer-checked:block">
                    <CheckIcon />
                  </div>
                </div>

                <p onClick={() => handleToggleTodo(todo.id)} className={`cursor-pointer ${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</p>

                <div className="flex items-center gap-4 ml-auto">
                  <span className="text-xs bg-green-200 rounded-lg px-2 py-1">WORK</span>
                  <button onClick={() => startEdit(todo.id, todo.title)} className="cursor-pointer rounded-full p-2 hover:bg-blue-100">
                    <EditIcon />
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)} className="cursor-pointer rounded-full p-2 hover:bg-blue-100">
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            )}
          </section>
        ))}

        <section className="py-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Completed</p>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
            </div>
            {completedTodo.map((todo) => (
              <div className="flex flex-col gap-1">
                <div className="group flex items-center gap-3 px-4 py-3 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => handleToggleTodo(todo.id)}
                      className="peer appearance-none size-5 border-2 border-slate-300 dark:border-slate-600 rounded-full cursor-pointer transition-all hover:border-blue-400 checked:bg-blue-500 checked:border-blue-500"
                    />
                    <div className="absolute pointer-events-none hidden peer-checked:block">
                      <CheckIcon />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p onClick={() => handleToggleTodo(todo.id)}  className="cursor-pointer text-slate-500 dark:text-slate-400 text-[15px] font-normal truncate line-through decoration-slate-400">{todo.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
