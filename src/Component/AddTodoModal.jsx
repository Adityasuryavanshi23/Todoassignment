import { useEffect, useRef } from "react";

const AddTodoModal = ({ editPopup, addTodo, seteditPopup, editTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPopup) {
      editTodo(editPopup?.id, titleref.current.value, descref.current.value);
    } else {
      addTodo(titleref.current.value, descref.current.value);
    }
    handleCLose();
  };
  const descref = useRef();
  const titleref = useRef();
  useEffect(() => {
    if (editPopup?.id) {
      titleref.current.value = editPopup?.title;
      descref.current.value = editPopup?.description;
    }
  }, [editPopup]);
  const setEmptyString = () => {
    titleref.current.value = "";
    descref.current.value = "";
  };
  const handleCLose = () => {
    setEmptyString();
    seteditPopup(null);
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-sm modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {editPopup?.title ? "Edit" : "Add"} Todo
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCLose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Todo Title
                </label>
                <input
                  type="text"
                  ref={titleref}
                  className="form-control"
                  name="title"
                  //   onChange={(e) => setTitle(e.target.value)}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  ref={descref}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  //   onChange={(e) => setdescription(e.target.value)}
                  name="description"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCLose}
              >
                Close
              </button>
              <button
                data-bs-dismiss="modal"
                type="submit"
                className="btn btn-success"
              >
                {editPopup?.title ? "Update" : "Save"} Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
