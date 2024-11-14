<template>
  <div>
    <nav>
      <!--<a href="" data-jump='who'>who</a>-->
      <a href="/⚡">retro_</a>
      <a href="" @click.prevent="handleClick('websites')" title='websites'>websites</a>
      <a href="" @click.prevent="handleClick('software')" title='software'>software</a>
      <!-- <a href="" @click.prevent="handleClick('contact')" title='websites'>contact</a> -->
    </nav>


    <div class="container">
      <header id="who">
        <div class="jumbotron">
          <h1>sqr<span><b>△</b>m</span></h1>
          <p>
            I'm Bruce. A freelance website/webapp developer.<br><br>
            Experienced in html, css, javascript &amp; python.
          </p>
          <button @click.prevent="handleClick('websites')">websites</button>
          <button @click.prevent="handleClick('software')">software</button>
        </div>
      </header>

      

      <Websites />
      <Software />
      <!-- <Contact /> -->
    </div> <!-- /container -->
  </div>
  

  
</template>

<script>
import Websites from '~/components/Websites.vue'
import Software from '~/components/Software.vue'
//import Contact from '~/components/Contact.vue'
export default {
  components: {
  //  Contact,
    Websites,
    Software,
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
 @import "~assets/style"
   article 
    margin-bottom 80vh
    &:last-of-type
      margin-bottom 20vh
</style>

