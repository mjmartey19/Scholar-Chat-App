

const searchBtn = document.querySelector(".users .search button");
const searchInput = document.querySelector(".users .search input");

searchBtn.onclick = () => {
   searchInput.classList.toggle("active");
   searchBtn.classList.toggle("active");
}