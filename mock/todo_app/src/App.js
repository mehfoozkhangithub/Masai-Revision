import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoApp/actions/action";

function App() {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.operationsReducer);
  console.log("this is the app page console", todo);

  return (
    <div className="wrapper">
      <h1 className="text-center text-uppercase mt-5">
        Todo app create using react-redux
      </h1>
      <Form />
      <Todo />
      {todo.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
