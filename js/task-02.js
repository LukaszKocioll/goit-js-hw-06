
const existingUl = document.querySelector('ul');
const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];


const elementsToAdd = []; 

ingredients.forEach(fruit => {
   const newLi = document.createElement('li');
   newLi.textContent = fruit;
   elementsToAdd.push(newLi); 
});

existingUl.append(...elementsToAdd);
