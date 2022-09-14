import { configureStore, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload.text, id: action.payload.id }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.unshift({ text: action.payload.text, id: action.payload.id });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload.id),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload.text, id: action.payload.id });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload.id),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const actionCreators = {
  addToDo: toDos.actions.add,
  deleteToDo: toDos.actions.remove,
};

export default store;
