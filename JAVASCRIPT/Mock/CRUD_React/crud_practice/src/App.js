import "./App.css";
import Listing from "./Listing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
