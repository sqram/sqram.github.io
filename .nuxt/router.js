import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31bf731c = () => interopDefault(import('../pages/⚡.vue' /* webpackChunkName: "pages/⚡" */))
const _8c3b1122 = () => interopDefault(import('../pages/retro.vue' /* webpackChunkName: "pages/retro" */))
const _735d78ba = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/⚡",
    component: _31bf731c,
    name: "⚡"
  }, {
    path: "/retro",
    component: _8c3b1122,
    name: "retro"
  }, {
    path: "/",
    component: _735d78ba,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
