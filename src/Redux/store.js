import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { nanoid } from "nanoid";

export const store = legacy_createStore(reducer, {
  data: [],
});
