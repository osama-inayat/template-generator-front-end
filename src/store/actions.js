import * as Types from "@/store/types";
import axios from "axios";
export default {
  [Types.CREATE_TEMPLATE]: (context, payload) => {
    context.commit(Types.SET_LOADING, true);
    axios
      .post("https://plankton-app-datju.ondigitalocean.app/templates/", {
        template: payload,
      })
      .then(({ data }) => {
        context.commit(Types.SET_TEMPLATES, data);
      })
      .finally(() => {
        context.commit(Types.SET_LOADING, false);
      });
  },
  [Types.UPDATE_TEMPLATE]: (context, payload) => {
    context.commit(Types.UPDATE_TEMPLATE, payload);
  },

  [Types.DELETE_TEMPLATE]: (context, payload) => {
    context.commit(Types.SET_LOADING, true);
    axios
      .delete(
        "https://plankton-app-datju.ondigitalocean.app/templates/" + payload.id
      )
      .then(({ data }) => {
        context.commit(Types.SET_TEMPLATES, data);
      })
      .finally(() => {
        context.commit(Types.SET_LOADING, false);
      });
  },
  [Types.FETCH_TEMPLATES]: (context) => {
    context.commit(Types.SET_LOADING, true);
    axios
      .get("https://plankton-app-datju.ondigitalocean.app/templates/")
      .then(({ data }) => {
        context.commit(Types.SET_TEMPLATES, data);
      })
      .finally(() => {
        context.commit(Types.SET_LOADING, false);
      });
  },
  [Types.UPDATE_TEMPLATE]: (context, { id, payload }) => {
    context.commit(Types.SET_LOADING, true);
    axios
      .put(`https://plankton-app-datju.ondigitalocean.app/templates/${id}`, {
        template: payload,
      })
      .then(({ data }) => {
        context.commit(Types.SET_TEMPLATES, data);
      })
      .finally(() => {
        context.commit(Types.SET_LOADING, false);
      });
  },
};
