import {  CHANGE_TAB } from "./action_types";


// tab changer action
export function changeTab(payload) {
  return { type: CHANGE_TAB, payload };
}
