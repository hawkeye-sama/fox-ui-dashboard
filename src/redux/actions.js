import {  CHANGE_TAB, MOBILE_DRAWER,CHANGE_PAGE_ANIMATION,CHANGE_AUTH_PAGE } from "./action_types";


// tab changer action
export function changeTab(payload) {
  return { type: CHANGE_TAB, payload };
}

export function setMobileOpen(payload) {
  return { type: MOBILE_DRAWER, payload };
}
export function changePageAnimation(payload) {
  return { type: CHANGE_PAGE_ANIMATION, payload };
}
export function changeAuthPage(payload) {
  return { type: CHANGE_AUTH_PAGE, payload };
}
