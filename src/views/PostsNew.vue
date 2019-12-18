<template>
  <div class="posts-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Make a new post</h1>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label>Author:</label>
          <input type="text" class="form-control" v-model="author">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "Enter Title",
      author: "Enter Author"
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        author: this.title
      };
      axios
        .post("/api/posts", params)
        .then(response => {
          this.$router.push("/posts");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>