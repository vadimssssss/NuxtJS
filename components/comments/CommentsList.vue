<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title"> Comments: </h2>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <p class="name"> {{ comment.name }} </p>
        <p class="text"> {{ comment.text }} </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
.comment {
  margin: 0 auto;
  text-align: center;
  width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 20px;
  .name {
    font-size: 24px;
    color: rgb(92, 41, 124);
    margin-bottom: 12px;
  }
  .comment {
    text-align: center;
  }
}
</style>
