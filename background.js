chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete') {
    chrome.tabs.executeScript(tabId, {file: 'convertDomain.js'});
    chrome.tabs.executeScript(tabId, {file: 'storage.js'});
    chrome.tabs.executeScript(tabId, {file: 'injected.js'});
  }
});