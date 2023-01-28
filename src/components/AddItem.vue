<template>
  <div class="container">
    <div v-if="loading">
      <OurLoader />
    </div>
    <form v-else @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <vue-editor
          v-model="description"
          :editorToolbar="customToolbar"
        ></vue-editor>
      </div>

      <div class="form-group">
        <label for="image_link">Image Link</label>
        <input
          type="text"
          class="form-control"
          id="image_link"
          v-model="image_link"
        />
      </div>

      <button type="submit" class="mt-5 btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      title: "",
      description: "",
      image_link: "",
      customToolbar: [[{ list: "ordered" }, { list: "bullet" }]],
    };
  },
  methods: {
    submitForm() {
      if (
        this.title !== "" &&
        this.description !== "" &&
        this.image_link !== ""
      ) {
        // send data to server or do something else
        this.loading = true;
        axios
          .post("https://plankton-app-datju.ondigitalocean.app/body_items", {
            title: this.title,
            description: this.description,
            image_link: this.image_link,
            template_id: this.$route.params.id,
          })
          .then(() => {
            alert("Successfully added body item.");
            this.$router.push(
              `/template/${this.$route.params.id}/all-listings`
            );
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        alert("Please fill in all fields.");
      }
    },
  },
};
</script>
<style lang="sass">
@import "../node_modules/bootstrap/scss/bootstrap"
</style>
