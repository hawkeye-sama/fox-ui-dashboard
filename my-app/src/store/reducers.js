import {  CHANGE_TAB, MOBILE_DRAWER } from "./action_types";


const initialState = {
  articles: [],
  tab: 0,
  mobileOpen:false,
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
  if(action.type ===MOBILE_DRAWER){
    return Object.assign({}, state, {
      mobileOpen: action.payload.mobileOpen
    })
  }
 
  return state;
}

export default rootReducer;