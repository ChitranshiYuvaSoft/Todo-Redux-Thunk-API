import React from "react";

const ListItems = () => {

  return (
    <li className="text-group-items d-flex align-items-center justify-content-between w-100 my-2 border p-2">
      <span>title : des </span>
      <span className=" d-flex align-items-center justify-content-between ">
        <button className="btn btn-warning text-light mx-2">Edit</button>
        <button className="btn btn-danger text-light">Delete</button>
      </span>
    </li>
  );
};

export default ListItems;
