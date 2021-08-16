const url = window.location.href;
console.log(url);
const domain = convertDomain(url);

getStorage(domain).then(value => {
  const selector = value;
  const price = parseInt(document.querySelector(selector).textContent.replace(".", ""));

  getStorage(url).then(value => {
    let toSave = value;

    if (toSave != null) {
      toSave.curPrice = price;
    } else {
      toSave = {
        ogPrice: price,
        curPrice: price
      }
    }
    
    console.log(toSave);
  
    setStorage(url, toSave);
  });

});
