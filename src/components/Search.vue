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
    axios
      .get(this.$config.api.ancient + "/ancient", {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        if (res.status == 204) {
          // nothing to do
        }
        if (res.status == 200) {
          this.ancients = res.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      ancients: []
    };
  }
};
</script>