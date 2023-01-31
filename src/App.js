import Todo from "./components/Todo";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="container py-5">
      <Todo title="React Basics" />
      <Todo title="React Intermediate" />
      <Todo title="React Advanced" />
      <Modal />
    </div>
  );
}

export default App;
