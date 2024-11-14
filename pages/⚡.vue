<template>
  <main>
    <nav>
      <!--<a href="" data-jump='who'>who</a>-->
      <a href="/">normal</a>
      <a href="" @click.prevent="handleClick('websites')" title='websites'>websites</a>
      <a href="" @click.prevent="handleClick('software')" title='software'>software</a>
      <!-- <a href="" @click.prevent="handleClick('contact')" title='websites'>contact</a> -->
    </nav>

    <header>
      <h1 class="logo">
        SQRAM
      </h1>  
        
      <div class="buttons">
        <button @click.prevent="handleClick('websites')">WEBAPPS</button>
        <button @click.prevent="handleClick('software')">SOFTWARE</button>
      </div>

      
      <div class="sunwrap">
        <div class="sun"></div>
      
      </div>
    </header>      

   <div>
     <h2>Software</h2>
     <Software theme="retro" />
   </div>

   <div>
     <h2>Webapps</h2>
     <Websites theme="retro" />
   </div>
  </main>
</template>

<script>
  import Websites from '~/components/Websites.vue'
  import Software from '~/components/Software.vue'
  export default {
    components: {
      Websites,
      Software
    },
    methods: {
      handleClick (name)
      {
        console.log('scrolling to')
        document.querySelector(`#${name}`).scrollIntoView({ 
          behavior: 'smooth'
        });
      }
    },
    mounted ()
    {
      ;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-76274804-2', 'auto');
      ga('send', 'pageview');
    }
  }
</script>
<style lang="stylus">
  $pink = #ce24b1


   
  .sunwrap
    position absolute        
    display flex
    justify-content center
    height 0
    width 100%
    overflow hidden
    top 51%   
    animation sun 10s 
    animation-fill-mode forwards
    animation-delay 1.5s
    z-index -2
    
    box-sizing border-box
    
  .sun
    width 500px
    height 500px
    background linear-gradient($yellow, $pink)
    border-radius 400px
    position absolute
    top 0
    box-shadow 0 0 15px $yellow, 0 0 5px 2px $pink
    box-shadow 0 0 15px $yellow
    margin 1em 0
    
    
  
  html
    height 100%
  body
    display flex
    flex-direction column
    align-items center
    font-family 'Varela Round'  
    background url(/img/bg/retro1.webp) #33294F
    background-size 100% 100%
    background-attachment fixed
  nav
    position absolute
    right 20px
    margin-top 15px
    a
      color pink
      text-decoration none
      margin-left 20px
      border-bottom 1px solid transparent
      &:hover
        color $blue
        border-bottom 1px solid pink
  header
    display flex
    flex-direction column
    align-items center
    height 100vh
    justify-content center
    position relative

  .buttons
    display flex
    margin 5em 0
    button      
      gradientBorder()
      letter-spacing 1px
      font-weight 700
      padding 20px 55px
      &:first-of-type
        margin-right 2em
      &:hover
        z-index 5
  h1
    font-size 8em
    letter-spacing 53px
    font-weight bold
    color #444  
    text-align center
    background -webkit-linear-gradient(#00cbff -10%, #ff00eb)
    -webkit-background-clip text
    -webkit-text-fill-color transparent  
    text-shadow 0 0 20px rgba(#ff00eb, 60%), 0 0 20px rgba(#00cbff, 30%)
    //text-shadow 0 0 20px rgba(#ff00eb, 30%)   
    span
      position relative
      font-size 210px
      bottom -45px
    //d
      //color red
      //animation  colors 5s infinite 
  div h2
    color $yellow
    color #efc431
    text-align center
    font-size 2.5em
    text-shadow 0 0 15px orange
    margin-bottom 1em
  article 
    margin-bottom 80vh
    &:last-of-type
      margin-bottom 20vh

  @keyframes sun
    0%
      height 0
      top 51%
    100%
      height 550px
      top 21%
      position fixed
</style>
