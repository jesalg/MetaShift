<template>
  <div>
    <h1>Welcome to MetaShift</h1>
    <input type="text" v-model="url"/>
    <a href="javascript:;" @click="start">Let's get started</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: null
    }
  },
  methods: {
    start() {
      window.location = `/link?url=${this.url}`
    }
  }
}
</script>
