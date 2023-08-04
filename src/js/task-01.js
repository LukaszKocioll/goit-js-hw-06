function countCategories(categories) {
    return categories.length;
}
function analyzeCategory(category) {
    const titleCategory = category.querySelector('h2');
    const elements = category.querySelectorAll('li');

    console.log('Category: ' + titleCategory.textContent);
    console.log('Elements: ' + elements.length);
}

const items = document.querySelectorAll('#categories .item');

const numberOfCategories = countCategories(items);
console.log('Number of categories: ' + numberOfCategories);
items.forEach(analyzeCategory);