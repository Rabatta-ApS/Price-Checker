const domain = convertDomain(window.location.href);

chrome.storage.sync.get([domain], function(result) {
  const selector = result[domain];

  console.log(parseInt(document.querySelector(selector).textContent.replace(".", "")));
});
