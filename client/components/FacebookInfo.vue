<template>
  <form id="basicinfo">
    <h2>Facebook Information</h2>
    <div class="formrow">
      <label for="facebook-title" class="formlabel">Title (Required)</label>
      <a href="#" class="helplink" v-tooltip="'The title of your object as it should appear within the Facebook Open Graph.'">Help</a>
      <input name="title" type="text" id="facebook-title" v-model="meta['title']" v-validate="{required: true}" :class="{'error': errors.has('title') }" class="textinput" placeholder="Give it a catchy title" />
    </div>
    <div class="formrow">
      <label for="facebook-image" class="formlabel">Preview Image</label>
      <a href="#" class="helplink" v-tooltip="'An image URL which should represent your object within the graph.<br>Use images that are at least 1200 x 630 pixels for the best display on high resolution devices.'">Help</a>
      <input name="image" type="text" id="facebook-image" v-model="meta['image']" v-validate="{url: true}" :class="{'error': errors.has('image') }" class="textinput" placeholder="URL of an image to use in the card" />
    </div>    
    <div class="formrow">
      <label for="facebook-description" class="formlabel">Description</label>
      <a href="#" class="helplink" v-tooltip="'A one to two sentence description of your object.'">Help</a>
      <textarea type="text" id="facebook-description" v-model="meta['description']" class="textinput" placeholder="Make your description something good" ></textarea>
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
      this.$parent.currentTab = 'pro';
    }
  }
}
</script>
