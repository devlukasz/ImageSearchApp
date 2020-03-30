const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const searchTerm = input.value;
  console.log(searchTerm);
}
