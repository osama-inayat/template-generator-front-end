<template>
  <div ref="my-ref">
    <div class="container">
      <header class="text-center">
        <img
          :src="template.header_item.banner_image_link"
          class="full-width-img"
        />
        <div class="mt-5">
          <img
            class="full-width-img"
            src="https://i.ibb.co/KqBXX7f/banner2.jpg"
            alt=""
          />
        </div>
      </header>
      <section class="text-center">
        <div>
          <div class="heading">{{ bodyItem.title }}</div>
          <div class="description" v-html="bodyItem?.description"></div>
          <img class="img-fluid" :src="bodyItem?.image_link" alt="" />
        </div>
      </section>
      <div
        class="text-center"
        v-for="(fi, index) in template.footer_items"
        :key="index"
      >
        <div class="heading">{{ fi.heading }}</div>
        <div class="description" v-html="fi.description"></div>
      </div>
    </div>
  </div>
  <div @click.stop="downloadTemplate">Download template</div>
  <textarea :value="valueItem" col="40"></textarea>
</template>
<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      valueItem: "",
    };
  },
  props: {
    template: {
      type: Object,
      required: true,
    },
    bodyItem: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // this.valueItem = this.$refs["my-ref"].innerHTML;
  },
  methods: {
    downloadTemplate() {
      this.valueItem = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                  <style>
                    .heading {
                      font-size: 2rem;
                      font-weight: 700;
                      margin-bottom: 1rem;
                      background-color: black;
                      color: white;
                    }
                    .description {
                      font-size: 1.5rem;
                      font-weight: 400;
                      margin-bottom: 1rem;
                    }
                    .full-width-img {
                      width: 100%;
                    }
                  </style>
                  </head>
                <body>
                  ${this.$refs["my-ref"].innerHTML}
                </body>
                </html>`;
    },
  },
};
</script>
<style scoped>
.heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background-color: black;
  color: white;
}
.description {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
.full-width-img {
  width: 100%;
}
</style>
<style lang="sass">
@import "../node_modules/bootstrap/scss/bootstrap"
</style>
