function onClickHandler(info, tab) {
  console.log("radio");
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    "id": "swift",
    "title":"Swift it!",
    "contexts":["selection"]
  });
});