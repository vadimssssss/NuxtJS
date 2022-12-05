<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="My lasts posts: " />
    <!-- posts -->
    <PostsList :posts="posts" />
    <Contacts />
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '1 Post',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga debitis vero nihil consectetur itaque?',
          img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
        }, {
          id: 2,
          title: '2 Post',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga debitis vero nihil consectetur itaque?',
          img: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2022/03/teddybear-dog-breeds.jpeg?bust=1646780646'
        }, {
          id: 3,
          title: '3 Post',
          descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga debitis vero nihil consectetur itaque?',
          img: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo'
        },
      ]
    }
  }
}
</script>
