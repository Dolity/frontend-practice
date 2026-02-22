import AddTask from "~/assets/icons/addTaskIcon";
import type { Route } from "./+types/todo";
import CheckIcon from "~/assets/icons/checkIcon";
import EditIcon from "~/assets/icons/editIcon";
import DeleteIcon from "~/assets/icons/deleteIcon";
import { useState } from "react";
import { createTodo, type Todo, } from "~/model/todoModel";

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

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = createTodo(newTodoTitle)
      setTodos([...todos, newTodo])
      setNewTodoTitle("")
    }
  }


  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }

  const activeTodo = todos.filter((todo) => !todo.isCompleted)
  const completedTodo = todos.filter((todo) => todo.isCompleted)


  return (
    <>
      <main className="bg-gray-100">
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
            <div className="flex flex-row text-primary items-center gap-3 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer appearance-none size-5 border-2 border-slate-300 dark:border-slate-600 rounded-full cursor-pointer transition-all hover:border-blue-400 checked:bg-blue-500 checked:border-blue-500" 
                  checked={todo.isCompleted}
                  onChange={() => toggleTodo(todo.id)}
                />
                <div className="absolute pointer-events-none hidden peer-checked:block">
                  <CheckIcon />
                </div>
              </div>

              <p className={todo.isCompleted ? "line-through" : ""}>{todo.title}</p>

              <div className="flex items-center gap-4 ml-auto">
                <span className="text-xs bg-green-200 rounded-lg px-2 py-1">WORK</span>
                <button className="cursor-pointer rounded-full p-2 hover:bg-blue-100">
                  <EditIcon />
                </button>
                <button className="cursor-pointer rounded-full p-2 hover:bg-blue-100">
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </section>
        ))}


        <section className="py-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Completed</p>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="group flex items-center gap-3 px-4 py-3 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    // checked={todo.} 
                    // onChange={(e) => setIsCompleted(e.target.checked)}
                    className="peer appearance-none size-5 border-2 border-slate-300 dark:border-slate-600 rounded-full cursor-pointer transition-all hover:border-blue-400 checked:bg-blue-500 checked:border-blue-500"
                  />
                  <div className="absolute pointer-events-none hidden peer-checked:block">
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-500 dark:text-slate-400 text-[15px] font-normal truncate line-through decoration-slate-400">Morning standup meeting</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
