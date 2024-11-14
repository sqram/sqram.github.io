<template>
  <article id="software">
      <section v-for="(s, i) in json" :key=i :class="theme">
        <div>{{ ++i }}</div>
        <div>
          <a class='name' :href='s.url'>{{ s.name }}</a>
          <div class='description'>{{ s['short-description'] }}</div>
          
        </div>
        <div>
          <a :href='s.url'>
            <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'  x='0px' y='0px'
               width='256px' height='256px' viewBox='0 0 256 256' enable-background='new 0 0 256 256'>
                <path fill='#444444' d='M96,112c0,8.837-7.164,16-16,16s-16-7.163-16-16s7.164-16,16-16S96,103.163,96,112z M176,96
                c-8.836,0-16,7.163-16,16s7.164,16,16,16s16-7.163,16-16S184.836,96,176,96z M224,4v108c0,26.4-21.6,48-48,48h-14.084
                c6.296,7.613,10.084,17.372,10.084,28v60c0,4.418-3.582,8-8,8s-8-3.582-8-8v-48c0-5.196-3.354-9.638-8-11.296V248
                c0,4.418-3.582,8-8,8s-8-3.582-8-8v-60h-8v60c0,4.418-3.582,8-8,8s-8-3.582-8-8v-59.296c-4.646,1.658-8,6.1-8,11.296v48
                c0,4.418-3.582,8-8,8s-8-3.582-8-8v-40.459c-0.001,0-0.002,0.001-0.002,0.001C78.936,210.281,72.412,212,64,212
                c-14.163,0-32.084-8.771-45.657-22.343C16.781,188.096,16,186.048,16,184c0-2.047,0.781-4.094,2.343-5.657
                C19.905,176.781,21.952,176,24,176c2.047,0,4.095,0.781,5.657,2.343C40.053,188.739,54.175,196,64,196
                c11.743,0,17.796-4.169,20.238-13.94c0.081-0.322,0.186-0.632,0.303-0.935c0-0.001,0-0.002,0-0.002
                c1.252-7.943,4.64-15.186,9.551-21.123H80c-26.4,0-48-21.6-48-48V4c0-1.538,0.881-2.939,2.267-3.605C34.818,0.13,35.411,0,36,0
                c0.892,0,1.776,0.298,2.5,0.877L77.402,32h101.195l38.903-31.123C218.225,0.298,219.109,0,220,0c0.59,0,1.182,0.13,1.732,0.395
                C223.119,1.061,224,2.462,224,4z M208,112c0-17.6-14.4-32-32-32H80c-17.6,0-32,14.4-32,32s14.4,32,32,32h96
                C193.6,144,208,129.6,208,112z'/>
            </svg>
          </a>
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
      window.sessionStorage.setItem('software', e.target.responseText)
    });
    oReq.open("GET", "/software.json");
    oReq.send();
  }
}
</script>


<style lang="stylus" scoped>
  @import "~assets/variables"
  #software-content
  section
    color $light
    margin 0 0 20px 0
    display flex
    & > div:first-of-type
      color $accent
      background alpha($dark, 0.85)
      font-weight bold
      border-radius 50px
      flex-shrink 1
      width 50px
      height 50px
      text-align center
      line-height 50px
      margin-top 17px
      @media $phone
        display none

      //align-items center

    & > div:nth-of-type(2)
      flex-grow 1
      background alpha($dark, 0.85)
      padding 20px
      box-sizing border-box
      margin 0 20px
      // & > div.name
      //   font-size 1.6em
      //   margin-top -8px
      //   padding 0 0 15px 0
      //   color $accent
      //   span
      //     border-bottom 1px dotted $accent
      // & > div.description
      //   padding  0

      // & > div.screenshots
      //   padding 20px 0 0 0
      //   display none
      //   a
      //     display inline-block
      //     width 200px
      //     height 120px
      //     margin-right 20px
      //     &:last-of-type
      //       margin 0
      //     img
      //       display inherit
      //       width 100%
      //       height 100%
    & > div:nth-of-type(3)
      flex-basis 74px
      flex-shrink 1
      a
        display block
        width 100%
        height 80px
        svg
          width 70%
          height 100%
      @media $phone
        display none
  &.retro
    & > div:first-of-type
      border-bottom 3px solid pink
      box-shadow 0 3px 2px #1fbbbd inset
    & > div:nth-of-type(2)
      border-bottom 3px solid #efc431
      a
        color pink 
        text-decoration none

</style>


