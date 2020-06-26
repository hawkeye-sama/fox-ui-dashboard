import {  CHANGE_TAB } from "./action_types";


const initialState = {
  articles: [],
  tab: 0,
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }
// TAB checker
  if(action.type === CHANGE_TAB) {
    return Object.assign({}, state, {
      tab: action.payload.tab
    });
  }
 
  return state;
}

export default rootReducer;