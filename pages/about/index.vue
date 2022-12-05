<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <!-- <div class="container"> -->
        <h1 class="title"> About my blog: </h1>
        <client-only>
          <!-- intro -->
          <Intro title="Intro Title"/>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quisquam consequatur voluptates distinctio sint facere voluptatem.</p>
        </client-only>

        <img src="@/assets/img/about.jpg" alt="">
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quisquam consequatur voluptates distinctio sint facere voluptatem.</p>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quisquam consequatur voluptates distinctio sint facere voluptatem.</p>
      <!-- </div> -->
    </section>
  </div>
</template>

<style lang="scss">
.about {
  text-align: center;
  p {
    margin: 20px 0;
  }
}
</style>
