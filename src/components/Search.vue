<template>
  <v-card flat outlined width="100%" class="py-10">
    <template v-for="(ancient, i) in ancients">
      <v-list-item two-line :key="i" :to="'/ancient/'+ancient.id">
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{ancient.title}}</v-list-item-title>
          <v-list-item-subtitle>{{ancient.author}} {{ancient.dynasty}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-card>
</template>

<script>
const axios = require("axios");

export default {
  beforeMount() {
    this.$store.dispatch("ancient/search");
  },
  computed: {
    ancients: {
      get() {
        return this.$store.state.ancient.ancients;
      },
      set(ancients) {
        this.$store.commit("ancient/setAncients", ancients);
      }
    }
  },
  data() {
    return {
      offset: 0,
      limit: 20
    };
  }
};
</script>