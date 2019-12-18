<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{ post.id }}</h1>
    <h1>{{ post.title }}</h1>
    <h1>{{ post.body }}</h1>
    <img v-bind:src="posts.image_url">
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the show",
      post: {}
    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get(`/api/posts/${this.$route.params.id}`).then(response => {
      // console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {}
};
</script>