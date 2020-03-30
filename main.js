const form = document.querySelector("form");
const input = document.querySelector("input");
const client_ID = "ibwbBpBWBhoCVsGknDne18srIpU4v4NjM9RpDOJHLMw";
const API_URL = `https://api.unsplash.com/search/photos/?client_id=${client_ID}&query=`;
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const searchTerm = input.value;
  console.log(searchTerm);

  search(searchTerm);
}

function search(searchTerm) {
  const url = `${API_URL}${searchTerm}`;
  fetch(url)
    .then(respone => respone.json())
    .then(result => {
      console.log(result);
    });
}
