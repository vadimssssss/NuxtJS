<template>
  <div class="wrapper-content wrapper-content--fixed">
    <BlogPost :post="post"/>
    <commentsList :comments="comments"/>
    <CommentsNewComment />
  </div>
</template>

<script>

import commentsList from '@/components/comments/CommentsList.vue'

export default {
  components: { commentsList },
  data() {
    return {
      post: {
        id: 1,
        title: '1 Post',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga debitis vero nihil consectetur itaque?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga debitis vero nihil consectetur itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga debitis vero nihil consectetur itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga debitis vero nihil consectetur itaque?',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
      },
      comments: [
        { id: 1, name: 'Vadim', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { id: 2, name: 'Maxim', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
  &-header {
    text-align: center;
    margin-bottom: 30px;
    img {
      max-width: 400px;
      margin-bottom: 16px;
    }
    p {
      color: #999;
    }
  }
}
</style>
