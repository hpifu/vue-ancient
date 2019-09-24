<template>
  <v-app-bar app clipped-left elevate-on-scroll class="pb-3" color="#fafafa">
    <v-toolbar-title>
      <span class="teal--text">
        <strong>HPiFu</strong>
      </span>
      &nbsp;&nbsp;
      <span class="font-weight-light cyan--text">ancient</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="query"
      append-icon="mdi-magnify"
      single-line
      rounded
      class="mt-9"
      filled
      full-width
      @click:append="$store.dispatch('ancient/search')"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    query: {
      get() {
        return this.$store.state.ancient.query;
      },
      set(query) {
        this.$store.commit("ancient/setQuery", query);
      }
    }
  },
  data() {
    return {};
  }
};
</script>
