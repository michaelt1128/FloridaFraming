import { handleActions, createAction } from "redux-actions";

const base = "supply/";
const INITIAL_STATE = {
  search_query:""
};

const setError = createAction(`${base}ERROR`);
export const updateSearch = createAction(`${base}UPDATESEARCH`);
export default handleActions(
  {
    [setError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [updateSearch]: (state, { payload }) => ({
      ...state,
      search_query: payload
    })
  },
  INITIAL_STATE
);
