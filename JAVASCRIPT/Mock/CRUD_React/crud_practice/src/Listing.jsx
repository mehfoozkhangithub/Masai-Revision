import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default function Listing() {
  const [data, setData] = React.useState(null);

  const getData = async () => {
    // fetch("http://localhost:8080/employee")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setData(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    try {
      axios
        .get("http://localhost:8080/employee")
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div>
          <Link className="btn btn-success m-2">Add New (+)</Link>
        </div>
        <div className="card-title">
          <h3 className="text-center">Employee List</h3>
        </div>
        <div class="card-body">
          <table className="table table-bordered">
            <thead className="bg-black text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((items) => (
                  <tr key={items.id}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.phone}</td>
                    <td className="color-style d-flex justify-content-evenly align-items-center ">
                      <a className="btn btn-success">Edit</a>
                      <a className="btn btn-danger">Remove</a>
                      <a className="btn btn-primary">Details</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
