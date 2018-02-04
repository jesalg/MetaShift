<template>
  <div>
  <header>
    <div id="logobar"  class="set-width">
      <span id="chromeextension">Grab Our <a href="" target="_blank">Chrome Extension</a></span>
    </div>
    <h1  class="set-width intro-h1">Easily customize link previews on social media</h1>
    <div id="form-getstarted" class="set-width" v-tooltip="{ content: 'Please enter a valid URL', trigger: 'manual', show: errors.has('url')}">
      <input name="url" type="url" v-model="url" v-validate="{required: true, url: true}" placeholder="Enter the url you want to customize"/>
      <button type="submit" @click="start">Get Started</button>
    </div>
    <div id="salestext" class="set-width intro-h1">
      No more waiting for the IT department to edit code so you can share a page. With MetaShift you can customize your link preview yourself.<br/> <span class="pinkhighlight">Absolutely no coding</span> 
    </div>
  </header>

  <section id="thingstoknow" class="set-width clearfix">
    <h2>Things To Know</h2>
    <div id="knowtext" class="fifty-float">When you customize a link with Metashift, you specify headlines, descriptions, images, and other meta data, and we save them as a Metashifted link which you share on social media. When people visit your metashifted link, we automatically forward visitors to your original URL. It’s a seamless experience for your visitors, but gives you control over how the link is previewed. Win-win!
    </div>
    <div id="knowimg" class="fifty-float"></div>
  </section>

  <section id="knowfeatures" class="set-width clearfix">
    <div class="knowfeature know-1">
      <h3>Short Links</h3>
      <div>Metashifted links come pre-shortened, which means they are easy to share without busting your character count.</div>
    </div>
    <div class="knowfeature know-2">
      <h3>Edit Any Time</h3>
      <div>Edit your share links any time you like. Change headlines, descriptions, images, and your link is automatically updated.</div>
    </div>
    <div class="knowfeature know-3">
      <h3>Instant Preview</h3>
      <div>Our link authoring tool enables you to preview your customizations live, so you know what they will look like.</div>
    </div>
  </section>

  <h2 class="set-width h2-block">Generic social media previews are confusing. Customize your previews on a link by link basis.</h2>

  <section class="set-width clearfix">
    <div class="turnthis">
      Turn this...
      <img src="images/ss-before.png"/>
      <img src="images/ss-before2.png"/>
    </div>
    <div class="turnthis">
      ...in to this using just a link
      <img src="images/ss-after.png"/>
    </div>
  </section>
  
  <div id="everyplatform" class="set-width">
    <h2>Every Platform</h2>
    <div>
      Customize links for every platform that embraces preview tags. Facebook, Twitter, LinkedIn and more.
    </div>
  </div>

  <section id="signupform">
    <div class="set-width">
      <template v-if="!subscribed">
        <h3>We are actively building a product to make managing social media links a breeze. Subscribe below to learn more.</h3>
        <input name="email" type="email" v-model="email" v-validate="{required: true, email: true}" placeholder="Enter Your Email Address" v-tooltip="{ content: 'Please enter a valid email', trigger: 'manual', show: errors.has('email')}"/>
        <button @click="subscribe">Subscribe</button>
      </template>
      <template v-else>
        <h3>Thanks, we will keep you posted!</h3>
      </template>
    </div>
  </section>
  </div>
</template>

<script>
import Noty from 'noty'
import 'noty/lib/noty.css'

export default {
  data () {
    return {
      url: null,
      email: null,
      subscribed: false
    }
  },
  methods: {
    start(e) {
      this.$validator.validate('url').then((result) => {
        if (result) {
          window.location = `/link?url=${this.url}`
        }
      });
    },
    subscribe(e) {
      this.$validator.validate('email').then((result) => {
        if (result) {
          const data = {
            email: this.email
          }
          const request = this.$http.post('/contact', data)
          request.then((response) => {
            this.subscribed = true;
          }, () => {
            new Noty({text: 'Whoops! Something went wrong, try again later.', type: 'error', layout: 'topRight', timeout:1000, theme: 'metroui'}).show();
          });
        }
      });
    }
  }
}
</script>
