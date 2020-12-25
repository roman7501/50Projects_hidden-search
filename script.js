const btnSearch = document.getElementById("toggle-search");
const inputSearch = document.getElementById("input-search");

btnSearch.addEventListener("click", () => {
  inputSearch.classList.toggle("show-input");
  console.log("click");
});
