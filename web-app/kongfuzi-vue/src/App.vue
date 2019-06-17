<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.flag"></TabBar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar";
export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home {
  overflow-y: auto;
  flex: 1;
}
</style>
