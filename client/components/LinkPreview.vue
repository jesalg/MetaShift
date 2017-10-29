<template>
  <div>
    <a id="previewsh" v-on:click="showPreview = !showPreview" >
      <div id="previewshbtn">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g id="Desktop-HD" transform="translate(-1063.000000, -259.000000)" stroke="#7095B4" class="previewarrow" stroke-width="2">
                    <g id="arrows-24px-outline-1_circle-up-39" transform="translate(1064.000000, 260.000000)">
                        <circle id="Oval" cx="11" cy="11" r="11"></circle>
                        <polyline id="Shape" points="7 13 11 9 15 13"></polyline>
                    </g>
                </g>
            </g>
        </svg>Open Preview
      </div>
    </a>
    <div id="previewwrapper" v-bind:style="{ display: showPreview == true ? 'block' : '' }">
      <div id="previewnav" class="clearfix">
        <h2>Preview</h2>
        <a href="javascript:;" v-on:click="currentTab = 'facebook'" v-bind:class="{ previewnavitem: currentTab != 'facebook', previewnavselected: currentTab == 'facebook' }">Facebook Preview</a>
        <a href="javascript:;" v-on:click="currentTab = 'twitter'" v-bind:class="{ previewnavitem: currentTab != 'twitter', previewnavselected: currentTab == 'twitter' }">Twitter Preview</a>
      </div>
      <twitter-preview v-if="currentTab == 'twitter'"/>
      <facebook-preview v-if="currentTab == 'facebook'"/>
    </div>
  </div>
</template>

<script>
import TwitterPreview from './TwitterPreview.vue'
import FacebookPreview from './FacebookPreview.vue'
export default {
  data () {
    return {
      currentTab: 'twitter',
      showPreview: false,
    }
  },
  components: {
    'twitter-preview': TwitterPreview,
    'facebook-preview': FacebookPreview,
  }
}
</script>
