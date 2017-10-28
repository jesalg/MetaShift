<template>
  <div>
    <aside>
      <a id="previewsh" onclick="preview();">
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
      <div id="previewwrapper">
        <div id="previewnav" class="clearfix">
          <h2>Preview</h2>
          <a href="#" class="previewnavitem">Facebook Preview</a>
          <a href="#" class="previewnavselected">Twitter Preview</a>
        </div>

        <!-- Large Twitter Preview -->
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
        <!-- Small Twitter Preview -->
        <!-- FB Preview -->
        <div id="fb-plrg">
          <div id="fb-plrg-image">
            <img src="/images/fb-placeholder.png" />
          </div>
          <div id="fb-meta">
            <div id="fb-plrg-headline">This Is A Headline</div>
            <div id="fb-plrg-desc">This is the description line</div>
            <div id="fb-plrg-url">metashift.co</div>
          </div>
        </div>
      </div>
    </aside>
    <main>
      <div id="main-wrapper">
        <header class="clearfix">
          <div id="logo"></div>
          <div id="base-link">You are customizing this link: <a href="#" target="_blank">https://websitename.com/product</a></div>
        </header>
        <section id="intro">
          Use the forms below to customize how your link will appear on social media. Once you are happy with it’s appearance, you can use the new Metashifted link we provide to share on social media.
        </section>
        <section id="formblock">
          <nav class="clearfix">
            <a href="#" class="selected">Basic Information</a>
            <a href="#">Twitter Details</a>
            <a href="#">Facebook Details</a>
            <a href="#"><div class="probtn">&nbsp;&nbsp;PRO FEATURES&nbsp;&nbsp;</div></a>
          </nav>
          <form id="basicinfo">
            <h2>Basic Information</h2>
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
        </section>
      </div>
    </main>
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
