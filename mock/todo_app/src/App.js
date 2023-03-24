import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-uppercase mt-5">
        Todo app create using react-redux
      </h1>
      <Form />
      <Todo />
    </div>
  );
}

export default App;
