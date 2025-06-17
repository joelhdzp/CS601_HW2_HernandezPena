/*
CS601 - Assignment 2 - JS
Created by Joel Hernandez Pena
*/

// JSON URL with a CORS-friendly proxy
const jsonData = "https://api.allorigins.win/raw?url=" + encodeURIComponent('https://gist.githubusercontent.com/joelhdzp/90a661312a32971f03bdab81fd334648/raw/08872946cba4e77a8b28e10eb85d388a899f2d7b/items.json');

// Total number of items to be sorted
let totalItems = 0;

// Counter for successfully sorted items
let sortedCount = 0;

// Function to handle dragstart event
function handleDragStart(e, item, element) {
  e.dataTransfer.setData('text/plain', JSON.stringify(item));
  e.dataTransfer.setData('text/item-id', element.dataset.id);
}

// Function to handle dragover event
function handleDragOver(e, zone) {
  e.preventDefault();
  zone.classList.add('over');
}

// Function to handle dragleave event
function handleDragLeave(zone) {
  zone.classList.remove('over');
}

// Function to handle drop event
function handleDrop(e, zone) {
  e.preventDefault();
  zone.classList.remove('over');

  // Defining drag-item selectors from JSON data
  const item = JSON.parse(e.dataTransfer.getData('text/plain'));
  const itemId = e.dataTransfer.getData('text/item-id');
  const draggedElement = document.querySelector(`.item[data-id='${itemId}']`);

  // Removing dropped items
  if (zone.id.includes(item.category)) {
    if (draggedElement) {
      draggedElement.remove();
    }

    // Creating a h3 element in which the matched items will be contained
    let listContainer = zone.querySelector('.item-list');
    if (!listContainer) {
      const title = document.createElement('h3');
      title.textContent = `Matched ${item.category}s:`;
      title.classList.add('drop-title');
      zone.appendChild(title);

      listContainer = document.createElement('div');
      listContainer.classList.add('item-list');
      zone.appendChild(listContainer);
    }

    // Adding dropped-item names into the container
    const p = document.createElement('p');
    p.textContent = item.name;
    p.classList.add('dropped-item');
    listContainer.appendChild(p);

    // Counting successful drops
    sortedCount++;
    if (sortedCount === totalItems) {
      
      // Clearing item container
      const container = document.getElementById('item-container');
      container.innerHTML = "";
      
      // Adding a classname to the container for CSS styling
      container.className = "flex-center";
      
      // Adding the congratulations message
      const message = document.createElement('h2');
      message.innerText = "🎉 Congratulations! You have matched all items correctly 👏";
      message.style.color = "#2e8b57";
      message.style.textAlign = "center";
      container.appendChild(message);
    }

  } else {
    // Adding an alert message when drop fail
    alert(`Wrong category! ${item.name} is a ${item.category}.`);
  }
}

// Main async function to initialize the app
async function initApp() {
  // Defining values to DOM elements
  const container = document.getElementById('item-container');
  const fruitsZone = document.getElementById('fruits-area');
  const vegetablesZone = document.getElementById('vegetables-area');

  // Using await feature to fetch data from JSON URL
  const response = await fetch(jsonData);
  const data = await response.json();

  // Set total number of items
  const allItems = [...data.fruits, ...data.vegetables];
  totalItems = allItems.length;

  // Setting attributes to each item in the list: drag, category and id
  allItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('draggable', true);
    div.setAttribute('data-category', item.category);
    div.setAttribute('data-id', item.id);
    div.innerText = item.name;

    // Attaching the div element to the dragstart event
    div.addEventListener('dragstart', (e) => handleDragStart(e, item, div));
    container.appendChild(div);
  });

  // Attaching drop-zone element to the dragover, dragleave, and drop events
  [fruitsZone, vegetablesZone].forEach(zone => {
    zone.addEventListener('dragover', (e) => handleDragOver(e, zone));
    zone.addEventListener('dragleave', () => handleDragLeave(zone));
    zone.addEventListener('drop', (e) => handleDrop(e, zone));
  });
}

// Running initialization after DOM is fully loaded
window.addEventListener('DOMContentLoaded', initApp);