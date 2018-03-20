<template>
  <form id="basicinfo">
    <h2>Basic Information</h2>
    <div class="formrow">
      <label for="basic-title" class="formlabel">Title (Required)</label>
      <a href="#" class="helplink" v-tooltip="'Title of the document, shown in a browser\'s title bar or on the page\'s tab.'">Help</a>
      <input name="title" type="text" id="basic-title" v-model="meta['title']" v-validate="{required: true}" :class="{'error': errors.has('title') }" v-on:blur="sync('title')" class="textinput" placeholder="Give it a catchy title" />
    </div>
    <div class="formrow">
      <label for="basic-title" class="formlabel">Image</label>
      <a href="#" class="helplink" v-tooltip="'Thumbnail image for the Google+ preview card.'">Help</a>
      <input name="image" type="text" id="basic-title" v-model="meta['image']" v-validate="{url: true}" :class="{'error': errors.has('image') }" v-on:blur="sync('image')" class="textinput" placeholder="https://www.example.com/image.jpg" />
    </div>
    <div class="formrow">
      <label for="basic-description" class="formlabel">Description</label>
      <a href="#" class="helplink" v-tooltip="'Short and accurate summary of the content of the page.'">Help</a>
      <textarea type="text" id="basic-description" v-model="meta['description']" v-on:blur="sync('description')" class="textinput" placeholder="Make your description something good" ></textarea>
    </div>
    <div class="formrow">
      <label for="basic-tags" class="formlabel">Tags (comma separated)</label>
      <a href="#" class="helplink" v-tooltip="'Keywords relevant to the page\'s content separated by commas.'">Help</a>
      <input type="text" id="basic-tags" v-model="meta['tags']" class="textinput" placeholder="Add some relevant tags" />
    </div>
    <div class="formrow">
      <label for="basic-url" class="formlabel">URL (Required)</label>
      <a href="#" class="helplink" v-tooltip="'URL to which you want the metashift link to redirect to.'">Help</a>
      <input type="url" id="basic-url" v-model="meta['url']" class="textinput" placeholder="http://www.yourdomain.com/image.jpg" />
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
    sync(key) {
      this.$parent.sync(key);
    },
    next() {
      this.$parent.currentTab = 'twitter';
    }
  }
}
</script>
