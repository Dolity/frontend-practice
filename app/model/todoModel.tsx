export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  category?: string;
}

export const createTodo = (title: string, category?: string): Todo => {
  return {
    id: Date.now(),
    title: title,
    isCompleted: false,
    category: category
  }
}

export const updateTodo = (todo: Todo, title: string) => {
    return {
        ...todo,
        title: title
    }
}

export const deleteTodo = (todos: Todo[], id: number) => {
  return todos.filter((todo) => todo.id !== id)
}

export const toggleTodo = (todo: Todo): Todo => {
  return {
    ...todo,
    isCompleted: !todo.isCompleted
  }
}