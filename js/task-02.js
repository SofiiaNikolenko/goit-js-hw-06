const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const Ulid = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const ulElement = document.createElement("li");
  ulElement.textContent = ingredient;
  ulElement.classList.add("item");
  Ulid.append(ulElement);
});