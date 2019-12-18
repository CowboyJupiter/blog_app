<template>
  <div class="posts-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit your post</h1>
        {{ post }}
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
      post: {}
    };
  },
  created: function() {
    console.log('in created');
    axios.get(`/api/posts${this.$route.params.id}`).then(response => {
      console.log(response.data);
    });
  },
  methods: {
    submit: function() {
      var params = {
        title: this.post.title,
        author: this.post.author
      };
      axios
        .patch(`/api/posts/${this.$route.params.id}`, params)
        .then(response => {
          this.$router.push(`/posts/${this.$route.params.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
     
    }
  }
};
</script>