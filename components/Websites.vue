<template>
  <article id="websites">
    <section v-for="(s, i) in json" :key=i :class="theme">
      <div><img :src="s.screenshots[0]" /></div>
      <div>
        <a href="" class='name'>{{s.name}}</a>
        <p>{{ s.description }}</p>
        <ul>
            <li v-for="(tag, i) in s.tags" :key=i>{{tag}}</li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    theme: {
      required: false,
      default: ''
    }
  },
  data ()
  {
    return {
      json: null
    }
  },

  beforeMount ()
  {
    var self = this
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", e => {
      this.json = JSON.parse(e.target.responseText)
      window.sessionStorage.setItem('websites', e.target.responseText)
    });
    oReq.open("GET", "/websites.json");
    oReq.send();
  }
}
</script>


<style lang="stylus" scoped>
  @import "~assets/variables"
  section
    background alpha($dark, 0.85)
    padding 15px
    display flex
    align-items flex-start
    box-sizing border-box
    margin 0 0 20px 0
    color $light
    border-radius 6px
    & > div:first-of-type
      flex-basis 150px
      height 100px
      margin-right 20px
      min-width 150px
      @media $phone
        display none
      img
        display block
        width 100%
        height 100%
    p
      display block
    @media $phone
      border-radius 4px
      line-height 20px
  ul
    margin 0
    padding 0
    margin-top 20px
    li
      list-style-type none
      margin 0 15px 0 0
      display inline-block
      background alpha($dark, 0.5)
      color $light
      padding 4px 20px 6px
      border-radius 4px
      font-size 0.8em
      @media $phone
        padding 5px 5px
  &.retro
    background #111
    gradientBorder()
    padding-left 15px
    a
      color orange
      text-decoration none
      font-size 1.1em



</style>


