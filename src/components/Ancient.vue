<template>
  <v-card flat outlined width="100%" class="py-10 px-12">
    <h2>{{this.title}}</h2>
    <h3 class="my-5">{{this.author}} {{this.dynasty}}</h3>
    <p v-html="content"></p>
  </v-card>
</template>

<script>
const axios = require("axios");
import api from "../api/api";

export default {
  beforeMount() {
    api.ancient(
      this.$route.params.id,
      res => {
        console.log(res);
        if (res.status == 204) {
          this.content = "204 NO CONTENT 没有该页面";
        }
        if (res.status == 200) {
          this.title = res.data.title;
          this.author = res.data.author;
          this.dynasty = res.data.dynasty;
          this.content = res.data.content;
          this.content = this.content.replace(/\n/g, "<br />");
        }
      },
      err => {
        console.log(err);
      }
    );
  },
  data() {
    return {
      title: "",
      author: "",
      dynasty: "",
      content: ""
    };
  }
};
</script>