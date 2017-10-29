<template>
  <div>
    <aside>
      <link-preview/>
    </aside>
    <main>
      <div id="main-wrapper">
        <header class="clearfix">
          <div id="logo"></div>
          <div id="base-link">You are customizing this link: <a href="#" target="_blank">https://websitename.com/product</a></div>
        </header>
        <section id="intro">
          Use the forms below to customize how your link will appear on social media. Once you are happy with it’s appearance, you can use the new Metashifted link we provide to share on social media.
        </section>
        <section id="formblock">
          <nav class="clearfix">
            <a href="javascript:;" v-on:click="currentTab = 'basic'" v-bind:class="{ selected: currentTab == 'basic' }">Basic Information</a>
            <a href="javascript:;" v-on:click="currentTab = 'twitter'" v-bind:class="{ selected: currentTab == 'twitter' }">Twitter Details</a>
            <a href="javascript:;" v-on:click="currentTab = 'facebook'" v-bind:class="{ selected: currentTab == 'facebook' }">Facebook Details</a>
            <a href="javascript:;" v-on:click="currentTab = 'pro'" v-bind:class="{ selected: currentTab == 'pro' }"><div class="probtn">&nbsp;&nbsp;PRO FEATURES&nbsp;&nbsp;</div></a>
          </nav>
          <basic-info v-if="currentTab == 'basic'"/>
          <twitter-info v-if="currentTab == 'twitter'"/>
          <facebook-info v-if="currentTab == 'facebook'"/>
          <pro-features v-if="currentTab == 'pro'"/>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import BasicInfo from './components/BasicInfo.vue'
import TwitterInfo from './components/TwitterInfo.vue'
import FacebookInfo from './components/FacebookInfo.vue'
import ProFeatures from './components/ProFeatures.vue'
import LinkPreview from './components/LinkPreview.vue'

export default {
  data () {
    return {
      currentTab: 'basic'
    }
  },
  components: {
    'basic-info': BasicInfo,
    'twitter-info': TwitterInfo,
    'facebook-info': FacebookInfo,
    'pro-features': ProFeatures,
    'link-preview': LinkPreview
  }
}
</script>
