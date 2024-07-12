import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createData, updateData } from "../Redux/todo/todoAction";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {edit} = useSelector(state => state.todo)

  const [formData , setFormData] = useState({
    title : "",
    description : ""
  });

  const {title, description} = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      dispatch(updateData({
        _id : edit.todo._id,
        title,
        description
      }))
    }else{
      dispatch(createData(formData))
    }
    navigate('/data')
  }

  useEffect(() => {
    // debugger
      if (edit && edit.Data) {
        setInitialValues({
          name: edit.Data.name,
          email: edit.Data.email,
          phone: edit.Data.phone,
          city: edit.Data.city,
        });
      }
    }, [edit]); // Update initialValues when edit prop changes
  
  


 
  useEffect(() => {
   if(edit && edit.todo){
    setFormData({
      title: edit.todo.title,
      description: edit.todo.description,
    });
   }
  }, [edit]);
 
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center my-4 "
      id="form"
      style={{ height: "70vh" }}
    >
      <form
        action=""
        className="d-flex align-items-center justify-content-center flex-column w-25"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Title Here"
          className="form-control"
          required
          value={title}
          name="title"
          onChange={handleChange}
        />
        <textarea
          rows="3"
          cols="30"
          placeholder="Enter Description Here"
          className="form-control my-3"
          required
          value={description}
          name="description"
          onChange={handleChange}
        ></textarea>

        <button className="btn btn-success border text-li text-light contained form-control rounded-0">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
