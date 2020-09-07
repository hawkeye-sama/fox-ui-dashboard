import {  CHANGE_TAB, MOBILE_DRAWER,CHANGE_PAGE_ANIMATION, CHANGE_AUTH_PAGE } from "./action_types";


const initialState = {
  articles: [],
  pageAnimation:{
    animationType:"up"
  },
  authPage:"signup",
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

  if(action.type === CHANGE_PAGE_ANIMATION){
    return Object.assign({}, state, {
      pageAnimation: action.payload.pageAnimation
    })
  }
  if(action.type === CHANGE_PAGE_ANIMATION){
    return Object.assign({}, state, {
      pageAnimation: action.payload.pageAnimation
    })
  }
  if(action.type === CHANGE_AUTH_PAGE){
    return Object.assign({}, state, {
      authPage: action.payload.authPage
    })
  }
  
  
 
 
  return state;
}

export default rootReducer;