let counterValue = 0;

        const valueDisplay = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');


function updateCounterDisplay() {
  valueDisplay.textContent = counterValue;
}

function decrementCounter() {
  counterValue--;
  updateCounterDisplay();
}



function incrementCounter() {
  counterValue++;
  updateCounterDisplay();
}


incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);