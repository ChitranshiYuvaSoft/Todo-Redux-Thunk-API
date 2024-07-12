import axios from "axios"
// const API_URL = "https://listtimes.onrender.com/api/todo";
const API_URL = "https://listtimes.onrender.com/api/todo";

export const getData = (data) => ({
    type : "GET_DATA",
    payload : data
})

export const deleteTodo = (_id) => ({
    type : "DELETE_TODO",
    payload : _id
})


export const addTodo = (todo) => ({
    type : "ADD_TODO",
    payload : todo
})


export const editTodo = (todo) => ({
    type : "EDIT_TODO",
    payload : todo
})


export const updateTodo = (newTodo) => ({
    type : "UPDATE_TODO",
    payload : newTodo
})


export const fetchData  = () => async(dispatch) => {
    try {
        const response = await axios.get(API_URL);
        // console.log(response.data);
        // return response.data;
        return dispatch(getData(response.data))
    } catch (error) {
        console.log(error.message);
    }
}

export const removeData = (_id) => async(dispatch) => {
    try {
        const response = await axios.delete(API_URL + '/' + _id);
        return dispatch(deleteTodo(_id));
    } catch (error) {
        console.log(error.message);
    }
}


export const createData = (formData) => async(dispatch) => {
   try {
    const response = await axios.post(API_URL + '/', formData);
    return dispatch(addTodo(response.data))
   } catch (error) {
    console.log(error.message);
   }
}

export const updateData = (todo) => async(dispatch) => {
    try {
        const response = await axios.put(API_URL + '/' + todo._id, {title : todo.title, description : todo.description});
        return dispatch(updateTodo(response.data));
    } catch (error) {
        console.log(error.message);
    }
}