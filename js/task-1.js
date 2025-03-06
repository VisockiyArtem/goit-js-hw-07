const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

// 1. Кількість категорій
console.log(`Number of categories: ${items.length}`);

// 2. Інформація про кожну категорію
items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});