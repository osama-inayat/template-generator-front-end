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
          v-model="template.header_item.banner_text"
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
          v-model="template.header_item.banner_image_link"
        />
        <div class="invalid-feedback" v-if="bannerImageError">
          {{ bannerImageError }}
        </div>
      </div>
      <div class="form-group">
        <label>Titles and Descriptions</label>
        <div v-for="(item, index) in template.footer_items" :key="index">
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
            <div class="invalid-feedback" v-if="item.descriptionError">
              {{ item.descriptionError }}
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="addTitlePair">
          + Add Another
        </button>
      </div>

      <button type="submit" class="mt-1 btn btn-primary">
        {{ createOrEdit }}
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      template: {
        name: "",
        header_item: {
          banner_text: "",
          banner_image_link: "",
        },
        footer_items: [
          {
            heading: "",
            description: "",
          },
        ],
      },
      isEdit: false,
      bannerType: "text",
      bannerText: "",
      bannerTextError: "",
      bannerImage: "",
      bannerImageError: "",
      customToolbar: [[{ list: "ordered" }, { list: "bullet" }]],
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.isEdit = true;
      this.getTemplate();
    }
  },
  computed: {
    createOrEdit() {
      return this.isEdit ? "Edit Template" : "Create Template";
    },
  },
  methods: {
    ...mapActions(["CREATE_TEMPLATE", "UPDATE_TEMPLATE"]),
    getTemplate() {
      axios
        .get(`/api/templates/${this.$route.params.id}`)
        .then((response) => {
          this.template = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
      this.template.footer_items.push({
        heading: "",
        description: "",
      });
    },
    submitData() {
      let payload = {
        name: this.template.name,
        header_item_attributes: this.template.header_item,
        footer_items_attributes: this.template.footer_items,
      };
      if (this.$route.params.id)
        this.UPDATE_TEMPLATE({ id: this.$route.params.id, payload }).then(
          () => {
            this.$router.push("/my-templates");
          }
        );
      else
        this.CREATE_TEMPLATE(payload).then(() => {
          this.$router.push("/my-templates");
        });
    },
  },
};
</script>
<style lang="sass">
@import "../node_modules/bootstrap/scss/bootstrap"
</style>
