<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>

    <div v-for="post in posts">
      <p>id: {{post.id}}</p>
      <p>{{ post.title }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">go to show page</router-link>
      <p>{{ post.author }}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the post index!",
      posts: []
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
      console.log(response.data);
      this.posts = response.data;
    });
  },
  methods: {}
};
</script>