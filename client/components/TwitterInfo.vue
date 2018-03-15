<template>
  <form id="basicinfo">
    <h2>Twitter Information</h2>
    <div class="formrow">
      <label for="twitter-title" class="formlabel">Title (Required)</label>
      <a href="#" class="helplink" v-tooltip="'Title of content (max 70 characters)'">Help</a>
      <input name="title" type="text" id="twitter-title" v-model="meta['title']" v-validate="{required: true}" :class="{'error': errors.has('title') }" class="textinput" placeholder="Give it a catchy title" />
    </div>
    <div class="formrow">
      <label for="twitter-image" class="formlabel">Preview Image</label>
      <a href="#" class="helplink" v-tooltip="'Used with summary, summary_large_image, photo, product, and player cards.<br>Make sure the image is at least 280px wide by 150px tall.'">Help</a>
      <input name="image" type="text" id="twitter-image" v-model="meta['image']" v-validate="{url: true}" :class="{'error': errors.has('image') }" class="textinput" placeholder="URL of an image to use in the card" />
    </div>
    <div class="formrow">
      <label for="twitter-description" class="formlabel">Description</label>
      <a href="#" class="helplink" v-tooltip="'Description of content (maximum 200 characters)'">Help</a>
      <textarea type="text" id="twitter-description" v-model="meta['description']" class="textinput" placeholder="Make your description something good" ></textarea>
    </div>
    <div class="formrow">
      <label for="twitter-attribution" class="formlabel">User Attribution</label>
      <a href="#" class="helplink" v-tooltip="'@username of content creator'">Help</a>
      <input type="text" id="twitter-attribution" v-model="meta['creator']" class="textinput" placeholder="@username" />
    </div>
    <div class="formfooter">
      <button type="submit" class="normalbtn savebtn" v-on:click.stop.prevent="save">Save</button>
      <button type="submit" class="normalbtn nextbtn" v-on:click.stop.prevent="next">Next</button>
      <div class="formupdated" v-if="updatedAt">Last Updated {{updatedAt | formatDate}}</div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    meta: {},
    updatedAt: {}
  },
  methods: {
    save() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$parent.save();
        } else {
          this.$parent.error();
        }
      });
    },
    next() {
      this.$parent.currentTab = 'facebook';
    }
  }
}
</script>
