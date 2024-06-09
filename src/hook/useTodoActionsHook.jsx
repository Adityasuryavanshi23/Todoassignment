import { useState } from "react";

const useTodoActionsHook = () => {
  const [TodoTask, setTodoTask] = useState(
    localStorage.getItem("TodoTask")
      ? JSON.parse(localStorage.getItem("TodoTask"))
      : []
  );
  const addTodo = (title, description) => {
    let updatedarr = [
      ...TodoTask,
      { id: TodoTask.length + 1, title, description },
    ];
    setTodoTask(updatedarr);
    persistdata(updatedarr);
  };
  const deleteTodo = (id) => {
    let updatedarr = TodoTask.filter((item) => item.id !== id);
    setTodoTask(updatedarr);
    persistdata(updatedarr);
  };
  const editTodo = (id, title, description) => {
    const updated = TodoTask.map((item) => {
      if (item.id === id) {
        return { id, title, description };
      }
      return item;
    });
    setTodoTask(updated);
    persistdata(updated);
  };
  const persistdata = (todotask) => {
    localStorage.setItem("TodoTask", JSON.stringify(todotask));
  };
  const searchTodo = (search) => {
    console.log(search?.length, "😍😍😍");
    if (search === "") {
      setTodoTask(
        localStorage.getItem("TodoTask")
          ? JSON.parse(localStorage.getItem("TodoTask"))
          : []
      );
    } else {
      setTodoTask(
        TodoTask.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  };

  return {
    addTodo,
    deleteTodo,
    editTodo,
    searchTodo,
    TodoTask,
  };
};

export default useTodoActionsHook;
