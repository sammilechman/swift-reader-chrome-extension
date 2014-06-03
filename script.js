function onClickHandler(info, tab) {

  var selectionText = info.selectionText;

  chrome.tabs.create({ url: "http://www.swift-reader.com/" }, function(tab) {

    chrome.tabs.executeScript(tab.id, {
      runAt: "document_end",
      code: 'document.onreadystatechange = function(){ if (document.readyState == "complete") { var a = document.querySelector("#hidden-listener"); a.textContent="'+selectionText+'"; }}'
    });
  });

};

chrome.contextMenus.create({
  "title": "Swift it!",
  "contexts": ["selection"],
  "onclick": onClickHandler
});
