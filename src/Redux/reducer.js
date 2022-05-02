import { ADD_DATA } from "./action";

const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return { ...store, data: store.data + payload };
    default:
      return store;
  }
};
