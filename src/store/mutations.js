import { SET_TEMPLATES } from "@/store/types";

export default {
  [SET_TEMPLATES]: (state, payload) => {
    state.templates = payload;
  },
};
