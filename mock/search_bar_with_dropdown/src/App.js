import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [dataGet, setData] = useState([]);
  let key = process.env.REACT_APP_URL; //! here we have the api url

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(key)
      .then((res) => res.data)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  console.log("this is the useEffect console", dataGet);

  return (
    <div className="App">
      <Search placeholder="Search in the input..." data={dataGet} />
    </div>
  );
}

export default App;
