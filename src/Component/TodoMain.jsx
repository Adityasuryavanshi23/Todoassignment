import { useEffect, useState } from "react";
import useTodoActionsHook from "../hook/useTodoActionsHook";
import AddTodoModal from "./AddTodoModal";
import SearchBox from "./SearchBox";
import TodoList from "./TodoList";

const TodoMain = () => {
  const { TodoTask, addTodo, deleteTodo, editTodo, searchTodo } =
    useTodoActionsHook();
  const [editPopup, seteditPopup] = useState(null);
  const [searchvalue, setsearchvalue] = useState("");
  useEffect(() => {
    searchTodo(searchvalue);
  }, [searchvalue]);

  return (
    <div className="mainTodo">
      <div className="d-flex justify-content-between align-items-center gap-3 mx-3 my-3">
        <SearchBox searchvalue={searchvalue} setsearchvalue={setsearchvalue} />
        <div
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          className="addnewbtn d-flex justify-content-center align-items-center"
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
      <TodoList
        TodoTask={TodoTask}
        searchvalue={searchvalue}
        deleteTodo={deleteTodo}
        seteditPopup={seteditPopup}
      />
      <AddTodoModal
        editTodo={editTodo}
        editPopup={editPopup}
        addTodo={addTodo}
        seteditPopup={seteditPopup}
      />
    </div>
  );
};

export default TodoMain;
