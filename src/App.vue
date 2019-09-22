<template>
  <v-app>
    <Header />

    <v-content>
      <v-layout justify-center row fill-height text-center mt-10>
        <v-flex md6>
          <transition name="slide-x-transition" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<style>
#app {
  /* font-family: "Josefin Sans", "ZCOOL XiaoWei", sans-serif; */
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({})
};
</script>