<template>
  <div class="v-app">
    <v-header />
    <div class="v-app__main">
      <v-search/>
      <v-slider/>
      <v-catalog/>
      <router-view></router-view>
    </div>
    <v-footer />
  </div>
</template>

<script>
import vFooter from './components/v-footer.vue';
import vHeader from './components/v-header.vue';
import vSearch from './components/v-search.vue';
import VSlider from './components/v-slider.vue';
import vCatalog from './components/v-catalog.vue';

export default {
  name: 'App',
  components: {
    vFooter,
    vHeader,
    vSearch,
    VSlider,
    vCatalog
  }
}
</script>

<style lang="scss">
.v-app {
  &__main {
    min-height: calc(100vh - 80px);
  }
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: 'PT Root UI', sans-serif;
  font-weight: 400;
}

.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1110px;
}


.btn {
  color: #FFFFFF;
  background: #7984C0;
  border-radius: 12px;
  text-decoration: none;
}
</style>
