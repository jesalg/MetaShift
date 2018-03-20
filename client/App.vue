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
        <section class="pageblock pageblockpad" id="emaillink" v-if="!hasEmail">
        	<h2>Want to be able to edit your link later? Give us your email address and we will send you a link.</h2>
        	<div v-tooltip="{ content: 'Please enter a valid email', trigger: 'manual', show: errors.has('email')}">
        		<input name='email' type="email" class="textinput" v-model="link.email" v-validate="{email: true}" placeholder="Enter your email address" />
        		<button type="submit" class="formbutton" @click="save">Send Link</button>
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
import normalizeUrl from 'normalize-url'

export default {
  data () {
    return {
      hasEmail: false,
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
      return `https://www.metashift.io/${this.link.viewHash}`;
    },
    showPreview() {
      return is.not.mobile();
    }
  },
  watch: {
    'link.meta.url': function() {
      this.getLinkMeta();
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
            link: normalizeUrl(this.link.meta['url']),
            viewHash: this.link.viewHash,
            meta: this.link.meta,
            facebookMeta: this.link.facebookMeta,
            twitterMeta: this.link.twitterMeta,
            email: is.email(this.link.email) ? this.link.email : null
          }
          const request = this.link.id ? this.$http.patch('/link/' + this.link.id, data) :
                            this.$http.post('/link', data)
          request.then((response) => {
            this.link.id = response.body.id;
            this.link.updatedAt = response.body.updatedAt;

            new Noty({text: 'Success', type: 'success', layout: 'topRight', timeout:1000, theme: 'metroui'}).show();
          }, () => {
            new Noty({text: 'Error', type: 'error', layout: 'topRight', timeout:1000, theme: 'metroui'}).show();
          });
        } else {
          this.error();
        }
      });
    },
    error() {
      new Noty({text: 'Please make sure all the fields are valid before saving', type: 'error', layout: 'topRight', timeout:1000, theme: 'metroui'}).show();
    },
    getLinkMeta() {
      if (is.url(this.link.meta['url'])) {
        const request = this.$http.post('/meta', {link: normalizeUrl(this.link.meta['url'])})
        request.then((response) => {
            const twitterImg = response.data.twitter && response.data.twitter['twitterImage'] && response.data.twitter['twitterImage'][0]['url']
            const ogImg = response.data.ogp && response.data.ogp['ogImage'] && response.data.ogp['ogImage'][0]['url']
            this.$nextTick(() => {
              this.link.meta = Object.assign({image: twitterImg || ogImg}, this.link.meta);
              this.link.twitterMeta = Object.assign({image: twitterImg || ogImg}, this.link.twitterMeta);
              this.link.facebookMeta = Object.assign({image: ogImg || twitterImg}, this.link.facebookMeta);
            })
          }, () => {
            //show error
          });
      }
    }    
  },
  created() {
    this.link = this.$parent.link;
    this.hasEmail = is.email(this.link.email)
  }
}
</script>
