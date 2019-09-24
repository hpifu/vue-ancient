<template>
  <v-card flat outlined width="100%" class="py-10">
    <template v-for="(ancient, i) in ancients">
      <v-list-item three-line :key="i" :to="'/ancient/'+ancient.id">
        <!-- <h3>{{ancient.title}}</h3>
        <h3 class="my-5">{{ancient.author}} {{ancient.dynasty}}</h3>-->
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <text-highlight :queries="[$store.state.ancient.query]">{{ancient.title}}</text-highlight>
          </v-list-item-title>
          <v-list-item-subtitle>
            <text-highlight :queries="[$store.state.ancient.query]">
              {{ancient.author}}
              {{ancient.dynasty}}
            </text-highlight>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <text-highlight :queries="[$store.state.ancient.query]">{{ancient.content}}</text-highlight>
          </v-list-item-subtitle>
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