<template>
  <section class="contact">
    <div class="container">
      <h2 class="title"> Contact me! </h2>
      <!-- message -->
      <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="user.name"> Name: </AppInput>
        <!-- email -->
        <AppInput v-model="user.email" type="email"> Email: </AppInput>
        <!-- text -->
        <AppTextarea v-model="user.text"> Message: </AppTextarea>

        <!-- butttons -->
        <div class="controls">
          <AppButton class="btnWhite"> Submit! </AppButton>
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
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = 'Submited!'

      this.user.name = ''
      this.user.email = ''
      this.user.text = ''
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: rgb(92, 41, 124);
  color: #fff;
  &-form {
    max-width: 600px;
    margin: 25px auto;
  }
  .title {
    color: #fff;
  }
  .controls {
    margin-top: 25px;
  }
}
</style>
