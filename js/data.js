document.addEventListener('DOMContentLoaded', function() {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
        document.getElementById('data').textContent = storedData;
    } else {
        document.getElementById('data').textContent = 'No hay datos guardados.';
    }
});
