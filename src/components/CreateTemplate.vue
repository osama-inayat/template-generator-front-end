<template>
  <div class="container">
    <form @submit.prevent="submitData">
      <div class="form-group">
        <label>Give this a name</label>
        <div class="form-check form-check-inline">
          <input class="form-control" type="text" v-model="template.name" />
        </div>
      </div>

      <div class="form-group">
        <label>Banner</label>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            v-model="bannerType"
            value="text"
          />
          <label class="form-check-label">Text</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            v-model="bannerType"
            value="image"
          />
          <label class="form-check-label">Image</label>
        </div>
      </div>
      <div v-if="bannerType === 'text'" class="form-group">
        <label>Banner Text</label>
        <input
          type="text"
          class="form-control"
          v-model="template.header_item_attributes.banner_text"
          @blur="validateBannerText"
          _t
          :class="{ 'is-invalid': bannerTextError }"
        />
        <div class="invalid-feedback" v-if="bannerTextError">
          {{ bannerTextError }}
        </div>
      </div>
      <div v-else class="form-group">
        <label>Banner Image</label>
        <input
          type="text"
          class="form-control"
          v-model="template.header_item_attributes.banner_image_link"
        />
        <div class="invalid-feedback" v-if="bannerImageError">
          {{ bannerImageError }}
        </div>
      </div>
      <div class="form-group">
        <label>Titles and Descriptions</label>
        <div
          v-for="(item, index) in template.footer_items_attributes"
          :key="index"
        >
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              v-model="item.heading"
              @blur="validateTitle(item)"
              :class="{ 'is-invalid': item.headingError }"
            />
            <div class="invalid-feedback" v-if="item.headingError">
              {{ item.headingError }}
            </div>
          </div>
          <div class="form-group">
            <label>Description</label>
            <vue-editor
              v-model="item.description"
              :editorToolbar="customToolbar"
            ></vue-editor>
            <!-- <Editor theme="snow" toolbar="minimal" /> -->
            <div class="invalid-feedback" v-if="item.descriptionError">
              {{ item.descriptionError }}
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="addTitlePair">
          + Add Another
        </button>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import { VueEditor } from "vue3-editor";
import axios from "axios";
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      template: {
        name: "",
        header_item_attributes: {
          banner_text: "",
          banner_image_link: "",
        },
        footer_items_attributes: [
          {
            heading: "",
            description: "",
          },
        ],
      },

      bannerType: "text",
      bannerText: "",
      bannerTextError: "",
      bannerImage: "",
      bannerImageError: "",
      customToolbar: [[{ list: "ordered" }, { list: "bullet" }]],
    };
  },
  methods: {
    validateBannerText() {
      if (!this.bannerText) {
        // this.bannerTextError = "Please enter a banner text.";
      } else {
        this.bannerTextError = "";
      }
    },
    validateBannerImage() {
      if (!this.bannerImage) {
        this.bannerImageError = "Please enter a banner image link.";
      } else if (
        !this.bannerImage.match(
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
        )
      ) {
        this.bannerImageError = "Please enter a valid image link.";
      } else {
        this.bannerImageError = "";
      }
    },
    validateTitle(item) {
      if (!item.title) {
        // item.titleError = "Please enter a title.";
      } else {
        // item.titleError = "";
      }
    },
    validateDescription(item) {
      if (!item.description) {
        // item.descriptionError = "Please enter a description.";
      } else {
        // item.descriptionError = "";
      }
    },
    addTitlePair() {
      this.template.footer_items_attributes.push({
        heading: "",
        // headingError: "",
        description: "",
        // descriptionError: "",
      });
    },
    submitData() {
      axios
        .post("/api/templates", this.template)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="sass">
@import "../node_modules/bootstrap/scss/bootstrap"
</style>
