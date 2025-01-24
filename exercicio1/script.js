import { foods } from "../data.js";

const foodGallery = document.querySelector("#food-gallery");
const foodFilterSelect = document.querySelector("#food-filter");

foodFilterSelect.addEventListener("click", () => {
  cleanGallery();

  switch (foodFilterSelect.value) {
    case "all":
      foods.map((item) => createFoodItem(item));
      break;

    case "fruits":
      foods
        .filter((item) => item.tipo === "fruits")
        .map((item) => createFoodItem(item));
      break;

    case "meals":
      foods
        .filter((item) => item.tipo === "meals")
        .map((item) => createFoodItem(item));
      break;

    case "desserts":
      foods
        .filter((item) => item.tipo === "desserts")
        .map((item) => createFoodItem(item));
      break;

    default:
      break;
  }
});

function createFoodItem(item) {
  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodImage = document.createElement("img");
  foodImage.src = item.image;
  foodImage.alt = item.name;

  const foodName = document.createElement("p");
  foodName.innerHTML = item.name;

  foodItem.appendChild(foodImage);
  foodItem.appendChild(foodName);
  foodGallery.appendChild(foodItem);
}

function cleanGallery() {
  const allFoodItems = document.querySelectorAll(".food-item");

  allFoodItems.forEach((element) => element.remove());
}
