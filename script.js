const toggleNavBtn = document.querySelector(".menu-toggle");
const toggleNavImg = document.querySelector("#toggle-menu-image");
const menu = document.querySelector(".nav-list");
// const overlay = document.querySelector(".overlay");
const cardsContainer = document.querySelector(".cards__container");

toggleNavBtn.addEventListener("click", toggleNav);

const viewportWidth = window.innerWidth;

let isOpen = false;
function toggleNav() {
  menu.classList.toggle("hide-nav");
  menu.ariaExpanded = "true";
  //   overlay.classList.toggle("show-overlay");
  isOpen = !isOpen;
  return (toggleNavImg.src = isOpen
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg");
}

function getCardData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      getCardsHtml(data);
    });
}

function getCardsHtml(arr) {
  let cardsHtml = "";

  arr.forEach((card) => {
    let image = viewportWidth > 860 ? card.images.desktop : card.images.mobile;
    console.log(image);
    cardsHtml += `
    <div class="card" style="background-image: url('${image}');"}>
        <h3 class="card--title" >${card.title}</h3>
    </div>    
    `;
  });
  cardsContainer.innerHTML = cardsHtml;
}
getCardData();
