<script>
import { mapActions } from "vuex";
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    ...mapActions(["FETCH_TEMPLATES"]),
  },
  mounted() {
    this.FETCH_TEMPLATES();
  },
};
</script>

<template>
  <header class="container">
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/my-templates"
                >Templates List</RouterLink
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>
<style lang="scss">
.loaders {
  display: flex;
  flex-wrap: wrap;
  counter-reset: list;
}
.loaders div {
  position: relative;
  margin: 0 100px;
  &::before {
    counter-increment: list;
    content: counter(list, decimal-leading-zero);
    position: absolute;
    top: -20px;
    left: -25px;
    font-size: 16px;
  }
}
.loader1 {
  span {
    display: block;
    width: 70px;
    height: 70px;
    border: 3px solid;
    border-radius: 50%;
    border-color: transparent #000 #000;
    animation: cssload-spin 690ms infinite linear;
    @keyframes cssload-spin {
      100% {
        transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
}
</style>
