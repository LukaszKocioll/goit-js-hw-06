const input = document.querySelector('input');
    const span = document.querySelector('span');

    function updateSpan() {
  const name = input.value;


  if (name === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = name;
  }
}
input.addEventListener('input', updateSpan);