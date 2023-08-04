
const existingUl = document.querySelector('ul');
const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];


ingredients.forEach(fruit =>{
   const newLi = document.createElement('li');
   newLi.textContent = fruit;
   existingUl.appendChild(newLi);

});
