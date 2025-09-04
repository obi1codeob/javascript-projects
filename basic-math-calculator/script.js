document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');
      const action = button.getAttribute('data-action');

      if (action === 'clear') {
        display.value = '';
      } else if (action === 'equals') {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = 'Error';
        }
      } else if (value) {
        display.value += value;
      }
    });
  });
});
