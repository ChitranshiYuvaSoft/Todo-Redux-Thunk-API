import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, fetchData, removeData } from "../Redux/todo/todoAction";
import { Link, useNavigate } from "react-router-dom";

const ListGroup = () => {
  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log("delete")
    dispatch(removeData(id));
  };

  const handleEdit = (data) => {
    dispatch(editTodo(data))
    navigate('/')
  }

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if(todos.todos.length === 0){
    return ( 
      <div className="w-100 d-flex align-items-center justify-content-center my-4 flex-column"
      style={{ height: "70vh" }}>
        <h2>No Data Here</h2>
        <Link to="/" className="text-success fw-bold">Create Data Here</Link>
      </div>
    )
  }

  // table-striped table-success
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center my-4"
      style={{ height: "70vh" }}
    >
      <table className="w-50 table  bg-danger flex-column  border">
        <thead>
          <tr className="bg-success">
            <th scope="col" className="text-center bg-success text-light">
              #
            </th>
            <th scope="col" className="text-center bg-success-subtle">
              Title
            </th>
            <th scope="col" className="text-center bg-success-subtle">
              Description
            </th>
            <th scope="col" className="text-center bg-success-subtle">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.todos.map((item, index) => {
            // console.log(item.id)
            return (
              <tr key={index}>
                <td scope="row" className="text-center">
                  {index + 1}
                </td>
                <td className="text-center">{item.title}</td>
                <td className="text-center">{item.description}</td>
                <td className="text-center">
                  <button className="bg-warning border-0 text-light" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="bg-danger border-0 text-light" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListGroup;
