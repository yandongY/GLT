import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import homeRouter from './home'
import accountRouter from './account'
import helpRouter from './help'
import historyRouter from './history'
import noticeRouter from './notice'
import signupRouter from './signup'
import loginRouter from './login'
import passwordRouter from './password'
import detailRouter from './detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'',
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    homeRouter,
    helpRouter,
    historyRouter,
    noticeRouter,
    signupRouter,
    loginRouter,
    passwordRouter,
    accountRouter,
    detailRouter
  ]
})
