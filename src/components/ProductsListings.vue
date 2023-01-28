<template>
  <div class="row">
    <div v-if="loading">
      <OurLoader />
    </div>
    <div
      v-else
      class="col-4 job-card h-50"
      v-for="bodyItem in filteredTemplate.body_items"
      :key="bodyItem.id"
    >
      <div class="inner-me">
        <PreviewTemplate :template="filteredTemplate" :body-item="bodyItem" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import PreviewTemplate from "./PreviewTemplate.vue";

export default {
  components: { PreviewTemplate },
  computed: {
    ...mapState(["templates", "loading"]),
    filteredTemplate() {
      return this.templates.find(({ id }) => id == this.$route.params.id) || {};
    },
  },
};
</script>
<style scoped lang="scss">
.preview-container {
  display: flex;
  flex-wrap: wrap;
}

.preview-box {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  flex-grow: 1;
}
.job-cards {
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  animation: slideY 0.6s both;
  //display: none;
  @media screen and (max-width: 1212px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.job-card {
  height: 100px !important;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
