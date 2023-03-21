// import React from "react";

export default function Listing() {
  return (
    <div className="container">
      <div className="card">
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
                <td>Action</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
