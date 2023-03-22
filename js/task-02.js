const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const Ulid = document.getElementById('ingredients');

const ulLi = ingredients
  .map(ingredient => `<li class="item">${ingredient}</li>`)
  .join("");

Ulid.innerHTML = ulLi;