// const reducer = (state, action) {
//     switch({action, data})  {
//         ADD_ITEM:
//             return Object.assign({}, state, data)
//         SAVE_ITEM:
//             //save based on id
//     }

import { ADD_ITEM } from "../Actions/Action";

const initialState = [];

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat(action.payload);

    default:
      return state;
  }
};

export default billReducer;
