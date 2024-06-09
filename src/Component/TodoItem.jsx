const TodoItem = ({ todoItem, deleteTodo, seteditPopup }) => {
  return (
    <div className="d-flex justify-content-between align-items-start todoitem my-1 gap-2">
      <div>
        <p className="todotitle">{todoItem?.title}</p>
        <p className="tododesc">{todoItem?.description}</p>
      </div>
      <div className="d-flex align-items-center gap-3 ">
        <i
          onClick={() => seteditPopup(todoItem)}
          className="fa-regular fa-pen-to-square cursor"
          style={{ color: "#0baef4" }}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        ></i>
        <i
          className="fa-solid fa-trash cursor"
          style={{ color: "#ff0000" }}
          onClick={() => deleteTodo(todoItem?.id)}
        ></i>
      </div>
    </div>
  );
};

export default TodoItem;
