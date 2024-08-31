document.getElementById('buttonText').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    localStorage.setItem('storedData', inputText);
    alert('¡Dato guardado!');
});
