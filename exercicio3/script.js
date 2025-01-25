import { foods } from "../data.js";

const foodGallery = document.querySelector("#food-list");
const selectedFoods = document.querySelector("#selected-foods");

foods.map((item) => createFoodItem(item));

const allFoodItems = foodGallery.querySelectorAll(".food-item");
const result = [];

allFoodItems.forEach((item) => {
  item.addEventListener("click", () => {
    const foodCalories = item.querySelector(".calories").innerHTML;
    const totalCalories = document.querySelector("#total-calories");

    createSelectedItem(item);

    result.push(Number(foodCalories));
    totalCalories.innerText = result.reduce((acc, curr) => acc + curr, 0);

    const selectedButtons = selectedFoods.childNodes;

    selectedButtons.forEach((element) => {
      const button = element.querySelector("button");

      button.addEventListener("click", () => {
        const calories = Number(element.querySelector("span").innerHTML);
        const caloriesIndex = result.indexOf(calories);

        if (caloriesIndex !== -1) {
          result.splice(caloriesIndex, 1);
        }

        element.remove();
        totalCalories.innerText = result.reduce((acc, curr) => acc + curr, 0);
      });
    });
  });
});

function createFoodItem(item) {
  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");

  const foodImage = document.createElement("img");
  foodImage.src = item.image;
  foodImage.alt = item.name;

  const foodName = document.createElement("p");
  foodName.innerHTML = item.name;

  const foodCalories = document.createElement("p");
  foodCalories.innerHTML = "Calorias: ";

  const numericalCalories = document.createElement("span");
  numericalCalories.classList.add("calories");
  numericalCalories.innerHTML = item.calories;

  foodCalories.appendChild(numericalCalories);

  foodItem.appendChild(foodImage);
  foodItem.appendChild(foodName);
  foodItem.appendChild(foodCalories);
  foodGallery.appendChild(foodItem);
}

function createSelectedItem(item) {
  const selectedFood = document.createElement("div");
  selectedFood.classList.add("selected-item");

  const selectedFoodName = document.createElement("p");
  selectedFoodName.innerHTML = item.querySelector("p").innerHTML;

  const selectedFoodCalories = document.createElement("span");
  selectedFoodCalories.innerHTML = item.querySelector(".calories").innerHTML;
  selectedFoodCalories.style.visibility = "hidden";

  const selectedFoodButton = document.createElement("button");
  selectedFoodButton.innerHTML = "X";

  selectedFood.appendChild(selectedFoodName);
  selectedFood.appendChild(selectedFoodCalories);
  selectedFood.appendChild(selectedFoodButton);
  selectedFoods.appendChild(selectedFood);
}
