<template>
  <article id="contact">
      <h1 class='section-name'>contact</h1>
      
      <form @submit='onSubmit'>
        <input type='email' placeholder='e-mail' required  />
        <textarea placeholder='message' required></textarea>
        <input type="hidden" />
        <div class='actions'>
          <input type='submit' value='send' />
          ..
        </div>

      </form>
    </article>
</template>

<script>
export default {

  methods: {
    onSubmit (e)
    {
      e.preventDefault()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~assets/variables"
  form
    & > *
      margin-bottom 20px
    input[type=email], textarea
      display block
      width 100%
      padding 15px
      font-size 1.3em
      box-sizing border-box
      background $input-bg
      border none
      background alpha($dark, 90%)
      color $light
      font-size 1.2em
      font-family inherit
    textarea
      height 15vmax
    .actions
      display flex
      input[type=submit]
        //width 100px
        background darken($cta-bg, 20%)
        transition background 0.2s
        color $cta-color
        padding 1% 6%
        border-radius 3px
        border 4px solid rgba(247,247,247,.29)
        display inline-block
        -webkit-appearance none 
        -moz-appearance none
        &:hover
          background $cta-bg
      .loading
        margin-left 1em



  .contact-response  
    font-size 1.3em  
    text-align center
    margin-bottom 1em
    color indianred
    font-weight bold
</style>
