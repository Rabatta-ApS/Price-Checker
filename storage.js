function setStorage(key, value) {
  let toSet = {};
  toSet[key] = value;
  chrome.storage.sync.set(toSet);
}

function getStorage(key) {
  return new Promise(resolve => {
    chrome.storage.sync.get([key], result => {
      resolve(result[key]);
    });
  });
}