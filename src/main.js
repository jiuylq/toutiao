// use amfe-flexible
import 'amfe-flexible'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import '@/utils/permission.js'

// 自定义组件
import btn from '@/components/button'
import Message from '@/components/message/index.js'
import Msg from '@/components/msg/index.js'
import Login from '@/components/login/index.js'

import errorImg from '@/assets/error.png'
import defaultImg from '@/assets/default.png'

// icon
import './icons'

import '@/styles/base.scss'
import '@/mock'

// import cube-ui
import {
  /* eslint-disable no-unused-vars */
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList
} from 'cube-ui'

Vue.use(btn)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toolbar)
Vue.use(TabBar)
Vue.use(TabPanels)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Upload)
Vue.use(Form)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(SegmentPicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Drawer)
Vue.use(ImagePreview)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Sticky)
Vue.use(ScrollNav)
Vue.use(ScrollNavBar)
Vue.use(RecycleList)

// Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorImg,
  loading: defaultImg,
  attempt: 1
})

Vue.prototype.$message = Message
Vue.prototype.$msg = Msg
Vue.prototype.$login = Login
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    // 空的实例放到根组件下，所有的子组件都能调用
    emitter: new Vue()
  },
  template: '<App/>',
  components: { App }
})
