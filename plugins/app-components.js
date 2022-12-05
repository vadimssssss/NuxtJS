import Vue from 'vue'

// UI
import Message from '@/components/UI/Message.vue'
import Intro from '@/components/UI/Intro.vue'
import PostsList from '@/components/blog/PostsList.vue'

// controls
import AppButton from '@/components/UI/controls/Button.vue'
import AppInput from '@/components/UI/controls/Input.vue'
import AppTextarea from '@/components/UI/controls/TextArea.vue'


// UI
Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)

// controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextarea', AppTextarea)
