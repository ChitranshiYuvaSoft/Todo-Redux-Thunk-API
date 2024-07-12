// import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "./todoTypes";

const initialState = {
  todos: [],
  isSuccess: false,
  edit : {todo : {}, isEdit : false}
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        todos: action.payload,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item._id!== action.payload),
      };


    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case "EDIT_TODO":
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { todo: {}, isEdit: false },
      };

    default:
      return state;
  }
};

export default todoReducer;
