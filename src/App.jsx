import "./App.css";
import TodoMain from "./Component/TodoMain";

function App() {
  return (
    <div className=" todowrapper ">
      <TodoMain />
    </div>
  );
}

export default App;

// TodoForm: A form to add a new task with fields for title and description.
// TodoList: A section to display existing tasks with the ability to edit and delete tasks.
// TodoItem: Individual task items showing title, description, and buttons for editing and deleting.
// Search box: text box to search among all Todos and list out Todo items that have specific
// search string.
