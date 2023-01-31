import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="container py-5">
      <Todo title="React Basics" />
      <Todo title="React Intermediate" />
      <Todo title="React Advanced" />
    </div>
  );
}

export default App;
