import reducer from "./reducer";
import { get } from "lodash-es";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

var dispatch, store;

export const initStore = ({ initialState }) => {
    store = configureStore({
      reducer,
      preloadedState: initialState,
      //"immutableCheck" slows down app, if larger objects exists in state.
      //Since "immer" is used for reducers by default, we can disable it
      middleware: [
        ...getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }),
      ],
    });
    dispatch = store.dispatch;
    return store;
  },
  getState = (arg) =>
    arg === undefined ? store.getState() : get(store.getState(), arg);

export { dispatch, store };

export default getState;
