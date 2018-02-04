chrome.browserAction.onClicked.addListener(function() {
chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
  console.log(tabs);
  var url = tabs[0].url;
  chrome.tabs.update( tabs[0].id, { url: "https://metashift.herokuapp.com/link?url=" + url } ); 
});
})


