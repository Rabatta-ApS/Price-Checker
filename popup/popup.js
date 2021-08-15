
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  const activeTab = tabs[0];
  const domain = convertDomain(activeTab.url);
  document.getElementById('domain').value = domain;

  document.getElementById('btnCheck').addEventListener('click', () => {
    const selector = document.getElementById('selector').value;
  
    let toSet = {};
    toSet[domain] = selector;
    chrome.storage.sync.set(toSet);
  });
});

function convertDomain (url) {
  let domain = url.replace("http://", "")
  .replace("https://", "")
  .replace(/www\d?./i, "")
  .split(/[/?#]/)[0];

  return domain.trim();
}