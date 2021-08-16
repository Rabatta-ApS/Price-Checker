
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  const activeTab = tabs[0];
  const url = activeTab.url;
  console.log(url);
  const domain = convertDomain(url);
  document.getElementById('domain').value = domain;

  document.getElementById('btnCheck').addEventListener('click', () => {
    const selector = document.getElementById('selector').value;

    setStorage(domain, selector);

    chrome.storage.sync.get(url, result => {
      console.log(result.url);
    });
  });
});

function convertDomain (url) {
  let domain = url.replace("http://", "")
  .replace("https://", "")
  .replace(/www\d?./i, "")
  .split(/[/?#]/)[0];

  return domain.trim();
}