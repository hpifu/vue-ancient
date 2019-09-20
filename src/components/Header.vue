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
      v-model="search"
      append-icon="mdi-magnify"
      single-line
      rounded
      class="mt-9"
      filled
      full-width
      @click:append="$router.push('/search?q='+search)"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>
