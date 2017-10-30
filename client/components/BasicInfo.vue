<template>
  <form id="basicinfo">
    <h2>Basic Information</h2>
    <div class="formrow">
      <label for="basic-title" class="formlabel">Title (Required)</label>
      <a href="#" class="helplink">Help</a>
      <input type="text" id="basic-title" v-model="meta['title']" class="textinput" placeholder="Give it a catchy title" />
    </div>
    <div class="formrow">
      <label for="basic-description" class="formlabel">Description</label>
      <a href="#" class="helplink">Help</a>
      <textarea type="text" id="basic-description" v-model="meta['description']" class="textinput" placeholder="Make your description something good" ></textarea>
    </div>
    <div class="formrow">
      <label for="basic-tags" class="formlabel">Tags (comma separated)</label>
      <a href="#" class="helplink">Help</a>
      <input type="text" id="basic-tags" v-model="meta['tags']" class="textinput" placeholder="Add some relevant tags" />
    </div>
    <div class="formrow">
      <label for="basic-url" class="formlabel">URL (Required)</label>
      <a href="#" class="helplink">Help</a>
      <input type="url" id="basic-url" v-model="meta['url']" class="textinput" placeholder="http://www.yourdomain.com/image.jpg" />
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
      this.$parent.currentTab = 'twitter';
    }
  }
}
</script>
