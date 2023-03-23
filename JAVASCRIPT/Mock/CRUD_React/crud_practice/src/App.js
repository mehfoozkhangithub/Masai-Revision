import "./App.css";
import Listing from "./Listing";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Delete from "./Delete";
import Create from "./Create";
import Edits from "./Edits";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operation</h1>

      <Listing />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />}></Route>
          <Route path="/employee/create" element={<Create />}></Route>
          <Route path="/employee/detail/:id" element={<Delete />}></Route>
          <Route path="/employee/edit/:id" element={<Edits />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/employee/create",
        element: <Create />,
      },
      {
        path: "/employee/details",
        element: <Delete />,
      },
      {
        path: "/employee/Edits",
        element: <Edits />,
      },
    ],
  },
]);

export default AppRouter;
