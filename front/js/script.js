const createCanap = (canap) => {
  let canapLink = document.createElement("a");
  document.querySelector(".items").appendChild(canapLink);
  let canapArticle = document.createElement("article");
  canapLink.appendChild(canapArticle);
  let canapImg = document.createElement("img");
  canapImg.src = canap.imageUrl;
  canapArticle.appendChild(canapImg);
};
const createCanaps = (canaps) => {
  for (const canap of canaps) {
    createCanap(canap);
  }
};
const createHomepage = () => {
  fetch("https://kanap-oc.herokuapp.com/api/products").then(function (
    response
  ) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(function (json) {
        console.log(json);
        createCanaps(json);
        // traitement du JSON
      });
    } else {
      console.log("Oops, nous n'avons pas du JSON!");
    }
  });
};

createHomepage();
