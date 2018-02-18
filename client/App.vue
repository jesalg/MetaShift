<template>
  <div>
    <aside>
      <link-preview v-if="showPreview" v-bind="{shortlink: shortlink, twitterMeta: link.twitterMeta, facebookMeta: link.facebookMeta}"/>
    </aside>
    <main>
      <div id="main-wrapper">
        <header class="clearfix">
          <a href="/"><div id="logo"></div></a>
          <div id="base-link" v-if="link.meta['url']">You are customizing this link: <a v-bind:href="link.meta['url']" target="_blank">{{link.meta['url']}}</a></div>
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
          <basic-info v-bind="{meta: link.meta, updatedAt: link.updatedAt}" v-if="currentTab == 'basic'"/>
          <twitter-info v-bind="{meta: link.twitterMeta, updatedAt: link.updatedAt}" v-if="currentTab == 'twitter'"/>
          <facebook-info v-bind="{meta: link.facebookMeta, updatedAt: link.updatedAt}" v-if="currentTab == 'facebook'"/>
          <pro-features v-if="currentTab == 'pro'"/>
        </section>
        <section id="metalink">
        	Here’s your new link to share on social media
        	<div>
        		<input type="url" v-model="shortlink"/>
        		<button type="button" v-clipboard:copy="shortlink" v-clipboard:success="onCopy">Copy</button>
        	</div>
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

import Noty from 'noty'
import 'noty/lib/noty.css'

import is from 'is_js'

export default {
  data () {
    return {
      currentTab: 'basic',
      link: {},
    }
  },
  components: {
    'basic-info': BasicInfo,
    'twitter-info': TwitterInfo,
    'facebook-info': FacebookInfo,
    'pro-features': ProFeatures,
    'link-preview': LinkPreview
  },
  computed: {
    shortlink() {
      return `https://metashift.io/${this.link.viewHash}`;
    },
    showPreview() {
      return is.not.mobile();
    }
  },
  methods: {
    onCopy: function (e) {
      new Noty({text: `You just copied: ${this.shortlink}`, type: 'success', layout: 'topRight', timeout:1000, theme: 'metroui'}).show();
    },
    sync(key) {
      if (!this.link.twitterMeta[key]) {
        this.$set(this.link.twitterMeta, key, this.link.meta[key])
      }
      if (!this.link.facebookMeta[key]) {
        this.$set(this.link.facebookMeta, key, this.link.meta[key])
      }
    },
    save() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const data = {
            link: this.link.meta['url'],
            meta: this.link.meta,
            facebookMeta: this.link.facebookMeta,
            twitterMeta: this.link.twitterMeta
          }
          const request = this.link.id ? this.$http.patch('/link/' + this.link.id, data) :
                            this.$http.post('/link', data)
          request.then((response) => {
            this.link.id = response.body.id;
            this.link.updatedAt = response.body.updatedAt;

            new Noty({text: 'Success', type: 'success', layout: 'topRight', timeout:1000, theme: 'metroui'}).show();
          }, () => {
            //show error
          });
        }
      });
    }
  },
  created() {
    this.link = this.$parent.link;
  }
}
</script>
