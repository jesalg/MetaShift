<template>
  <div id="twitter-plrg">
    <div class="clearfix">
      <div id="twitter-plrg-avatar"></div>
      <div id="twitter-nameblock">
        <span id="twitter-plrg-name">Username</span>
        <span id="twitter-plrg-uname">@username</span>
      </div>
    </div>
    <div id="twitter-plrg-caption">
      This is where your tweet text appears. This is all handled by you when you post the tweet. <a href="#"> https://metashift.co/4isd8</a>
      <span id="twitter-timestamp">7:00 AM - Oct 25, 2017</span>
    </div>
    <div id="twitter-plrg-image">
      <img src="/images/twitter-placeholder.png" />
    </div>
    <div id="twitter-meta">
      <div id="twitter-plrg-headline">This Is A Headline</div>
      <div id="twitter-plrg-desc">This is the description line</div>
      <div id="twitter-plrg-url">metashift.co</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'MetaShift'
    }
  }
}
</script>
