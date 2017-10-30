<template>
  <form id="basicinfo">
    <h2>Facebook Information</h2>
    <div class="formrow">
      <label for="facebook-title" class="formlabel">Title (Required)</label>
      <a href="#" class="helplink">Help</a>
      <input type="text" id="facebook-title" v-model="meta['title']" class="textinput" placeholder="Give it a catchy title" />
    </div>
    <div class="formrow">
      <label for="facebook-description" class="formlabel">Description</label>
      <a href="#" class="helplink">Help</a>
      <textarea type="text" id="facebook-description" v-model="meta['description']" class="textinput" placeholder="Make your description something good" ></textarea>
    </div>
    <div class="formfooter">
      <button type="submit" class="normalbtn savebtn" v-on:click.stop.prevent="save">Save</button>
      <button type="submit" class="normalbtn nextbtn" v-on:click.stop.prevent="next">Next</button>
      <div class="formupdated">Last Updated 2:30pm / Oct. 25, 2017</div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    meta: {}
  },
  methods: {
    save() {
      this.$parent.save();
    },
    next() {
      this.$parent.currentTab = 'pro';
    }
  }
}
</script>
