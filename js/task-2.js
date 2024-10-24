const images = [
  // ... ваш масив зображень
];

const gallery = document.querySelector('.gallery');

// Функція для створення елемента <li> з зображенням
function createGalleryItem(image) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  li.appendChild(img);   

  return li;
}

// Створення фрагмента документа для більш ефективної вставки елементів
const fragment = document.createDocumentFragment();

// Створення елементів галереї та додавання їх до фрагмента
images.forEach(image => {
  const li = createGalleryItem(image);
  fragment.appendChild(li);
});

// Додавання всіх елементів галереї до DOM за одну операцію
gallery.appendChild(fragment);