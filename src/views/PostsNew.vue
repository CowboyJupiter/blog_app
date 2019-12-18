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
          <label>Body:</label>
          <input type="text" class="form-control" v-model="Body">
        </div>
        <div class="form-group">
          <label>Image:</label>
          <input type="text" class="form-control" v-model="Image">
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
      body: "Enter Body",
      image: "Enter Image URL"
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image

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