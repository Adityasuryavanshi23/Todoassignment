import TodoItem from "./TodoItem";

const TodoList = ({ TodoTask, deleteTodo, seteditPopup, searchvalue }) => {
  return (
    <div className="mx-3 todolist">
      {TodoTask?.length > 0 ? (
        TodoTask?.map((item) => (
          <TodoItem
            seteditPopup={seteditPopup}
            deleteTodo={deleteTodo}
            key={item.id}
            todoItem={item}
          />
        ))
      ) : (
        <p className="nodata">
          {" "}
          No Task {searchvalue?.length > 0 ? "Found" : "Added"}!{" "}
        </p>
      )}
    </div>
  );
};

export default TodoList;
