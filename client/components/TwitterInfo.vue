<template>
  <form id="basicinfo">
    <h2>Twitter Information</h2>
    <div class="formrow">
      <label for="basic-title" class="formlabel">Title (Required)</label>
      <a href="#" class="helplink">Help</a>
      <input type="text" id="basic-title" class="textinput" placeholder="Give it a catchy title" />
    </div>
    <div class="formrow">
      <label for="basic-description" class="formlabel">Description</label>
      <a href="#" class="helplink">Help</a>
      <textarea type="text" id="basic-description" class="textinput" placeholder="Make your description something good" ></textarea>
    </div>
    <div class="formrow">
      <label for="basic-title" class="formlabel">Tags (comma separated)</label>
      <a href="#" class="helplink">Help</a>
      <input type="text" id="basic-title" class="textinput" placeholder="Give it a catchy title" />
    </div>
    <div class="formrow">
      <label for="basic-url" class="formlabel">URL (Required)</label>
      <a href="#" class="helplink">Help</a>
      <input type="url" id="basic-url" class="textinput" placeholder="http://www.yourdomain.com/image.jpg" />
    </div>
    <div class="formfooter">
      <button type="submit" class="normalbtn savebtn">Save</button><button type="submit" class="normalbtn nextbtn">Next</button>
      <div class="formupdated">Last Updated 2:30pm / Oct. 25, 2017</div>
    </div>
  </form>
</template>
