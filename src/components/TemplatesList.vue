<template>
  <div class="templates-list">
    <div v-if="loading">
      <OurLoader />
    </div>
    <div class="wrapper">
      <h1>Templates</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Add Body</th>
            <th scope="col">Preview Existing Listings</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="template in templates"
            :key="template.id"
            class="templates-list__item"
          >
            <td>{{ template.name || "-" }}</td>
            <td class="templates-list__item__header__actions">
              <button
                class="btn btn-primary"
                @click="editTemplate(template.id)"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click="deleteTemplate(template.id)"
              >
                Delete
              </button>
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click="generateNewBody(template.id)"
              >
                Add Body
              </button>
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click="previewExisting(template.id)"
              >
                Preview Existing Listings
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["templates", "loading"]),
  },
  methods: {
    ...mapActions(["DELETE_TEMPLATE"]),
    editTemplate(id) {
      this.$router.push(`/template/${id}/edit`);
    },
    generateNewBody(id) {
      this.$router.push(`/template/${id}/add-body`);
    },
    deleteTemplate(id) {
      this.DELETE_TEMPLATE({ id });
    },
    previewExisting(id) {
      this.$router.push(`/template/${id}/all-listings`);
    },
  },
};
</script>

<style lang="sass">
@import "../node_modules/bootstrap/scss/bootstrap"
</style>
