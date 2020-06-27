import {  CHANGE_TAB, MOBILE_DRAWER } from "./action_types";


// tab changer action
export function changeTab(payload) {
  return { type: CHANGE_TAB, payload };
}

export function setMobileOpen(payload) {
  return { type: MOBILE_DRAWER, payload };
}
