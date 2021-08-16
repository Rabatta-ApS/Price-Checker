const url = window.location.href;
console.log(url);
const domain = convertDomain(url);

getStorage(domain).then(value => {
  const selector = value;
  const price = parseInt(document.querySelector(selector).textContent.replace(".", ""));

  console.log(price);

  setStorage(url, price);
});
