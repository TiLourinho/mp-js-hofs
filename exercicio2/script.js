import { drinks } from "../data.js";

const fruitSelect = document.querySelector("#fruta");
const distilledSelect = document.querySelector("#destilado");
const createDrinkButton = document.querySelector("#criarDrink");
const creationResult = document.querySelector("#resultado");

let selectedFruit = fruitSelect.value;
let selectedDistilled = distilledSelect.value;

fruitSelect.addEventListener("click", () => {
  selectedFruit = fruitSelect.value;
});

distilledSelect.addEventListener("click", () => {
  selectedDistilled = distilledSelect.value;
});

createDrinkButton.addEventListener("click", () => {
  clearGallery();

  const result = drinks.find(
    ({ fruit, distilled }) =>
      fruit === selectedFruit && distilled === selectedDistilled
  );

  createDrinkItem(result);
});

function createDrinkItem(item) {
  const drinkItem = document.createElement("div");
  drinkItem.classList.add("drink-item");

  const drinkDetails = document.createElement("div");
  drinkDetails.classList.add("drink-item-box-texts");

  const drinkImage = document.createElement("img");
  drinkImage.src = item.image;
  drinkImage.alt = item.name;

  drinkItem.appendChild(drinkImage);

  const drinkName = document.createElement("h3");
  drinkName.innerHTML = item.name;
  const drinkDescription = document.createElement("p");
  drinkDescription.innerHTML = item.description;

  drinkDetails.appendChild(drinkName);
  drinkDetails.appendChild(drinkDescription);
  drinkItem.appendChild(drinkDetails);
  creationResult.appendChild(drinkItem);
}

function clearGallery() {
  const drinkItem = document.querySelectorAll(".drink-item");

  drinkItem.forEach((element) => element.remove());
}
