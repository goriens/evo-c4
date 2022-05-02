//action types
export const ADD_DATA = "ADD_DATA";

export const newOrder = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};
