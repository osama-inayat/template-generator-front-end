import { SET_TEMPLATES, SET_LOADING } from "@/store/types";

export default {
  [SET_TEMPLATES]: (state, payload) => {
    state.templates = payload;
  },
  [SET_LOADING]: (state, payload) => {
    state.loading = payload;
  },
};
