<template>
  <nuxt-link :to="/blog/+post.id" class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title"> {{ post.title }} </h3>
      <p> {{ post.descr }} </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.post {
  &-preview {
    max-width: 33%;
    padding: 16px;
    margin-bottom: 16px;
    text-align: center;
    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      margin-bottom: 16px;
    }
  }
  &-content {
    p {
      color: #999;
    }
  }
}
</style>
