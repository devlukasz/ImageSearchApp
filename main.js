const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImg = document.querySelector(".loading-image");
const imageSection = document.querySelector(".images");
const client_ID = "ibwbBpBWBhoCVsGknDne18srIpU4v4NjM9RpDOJHLMw";
const API_URL = `https://api.unsplash.com/search/photos/?client_id=${client_ID}&query=`;
loadingImg.style.display = "none";
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const searchTerm = input.value;
  console.log(searchTerm);

  search(searchTerm).then(showImages);
}

function search(searchTerm) {
  const url = `${API_URL}${searchTerm}`;
  loadingImg.style.display = "";
  return fetch(url)
    .then(respone => respone.json())
    .then(result => {
      return result.results;
    });
}
function showImages(images) {
  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image.urls.regular;
    imageSection.appendChild(imgElement);
  });
  loadingImg.style.display = "none";
}
