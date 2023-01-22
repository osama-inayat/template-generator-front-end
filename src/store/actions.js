import * as Types from "@/store/types";
import axios from "axios";
export default {
  [Types.CREATE_TEMPLATE]: (context, payload) => {
    axios.post("/api/templates/", { template: payload }).then(({ data }) => {
      context.commit(Types.SET_TEMPLATES, data);
    });
  },
  [Types.UPDATE_TEMPLATE]: (context, payload) => {
    context.commit(Types.UPDATE_TEMPLATE, payload);
  },

  [Types.DELETE_TEMPLATE]: (context, payload) => {
    axios.delete("/api/templates/" + payload.id).then(({ data }) => {
      context.commit(Types.SET_TEMPLATES, data);
    });
  },
  [Types.FETCH_TEMPLATES]: (context) => {
    axios.get("/api/templates/").then(({ data }) => {
      context.commit(Types.SET_TEMPLATES, data);
    });
  },
  [Types.UPDATE_TEMPLATE]: (context, { id, payload }) => {
    axios
      .put(`/api/templates/${id}`, { template: payload })
      .then(({ data }) => {
        context.commit(Types.SET_TEMPLATES, data);
      });
  },
};
