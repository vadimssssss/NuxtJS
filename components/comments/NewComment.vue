<template>
  <section class="comments">
    <div class="container">

      <h2 class="title"> New comment: </h2>

      <!-- message -->
      <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="comments-form">
        <!-- name -->
        <AppInput v-model="comment.name"> Name: </AppInput>
        <!-- text -->
        <AppTextarea v-model="comment.text"> Message: </AppTextarea>
        <!-- butttons -->
        <div class="controls">
          <AppButton> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>


<script>

export default {
  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = 'Submited!'
      this.comment.name = ''
      this.comment.text = ''
    }
  }
}
</script>

<style lang="scss">
.comments {
  margin: 0 auto;
  text-align: center;
  width: 600px;

  &-form {
    max-width: 600px;
    margin: 25px auto;
  }
  .controls {
    margin-top: 25px;
  }
}
</style>
