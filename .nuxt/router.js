import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _294ce70c = () => interopDefault(import('../pages/⚡.vue' /* webpackChunkName: "pages/⚡" */))
const _570d0d12 = () => interopDefault(import('../pages/retro.vue' /* webpackChunkName: "pages/retro" */))
const _3e2f74aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/⚡",
    component: _294ce70c,
    name: "⚡"
  }, {
    path: "/retro",
    component: _570d0d12,
    name: "retro"
  }, {
    path: "/",
    component: _3e2f74aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
