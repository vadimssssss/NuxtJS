<template>
  <section class="posts-list">
    <div class="container">
      <div class="posts__wrapper">
          <BlogPostsPreview v-for="post in posts" :key="post.id" :post="post"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
