<template>
  <div id="fb-plrg">
    <div id="fb-plrg-image">
      <img :src="meta['image'] || '/images/fb-placeholder.png'" width="100%" />
    </div>
    <div id="fb-meta">
      <div id="fb-plrg-headline">{{ meta['title'] || 'This Is A Headline' }}</div>
      <div id="fb-plrg-desc">{{ meta['description'] || 'This is the description line' }}</div>
      <div id="fb-plrg-url">{{ meta['url'] || 'metashift.co' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shortlink: null, 
    meta: {},
  }
}
</script>
