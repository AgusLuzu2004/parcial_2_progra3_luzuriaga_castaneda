const toggle = document.getElementById('modoToggle');
const label = toggle.nextElementSibling;
const body = document.body;
// Al cargar, aplicar modo guardado
const modoGuardado = localStorage.getItem('modo');
if (modoGuardado === 'oscuro') {
    body.classList.add('dark-mode');
    toggle.checked = true;
    label.textContent = '☀️';
}
toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const esOscuro = body.classList.contains('dark-mode');
    localStorage.setItem('modo', esOscuro ? 'oscuro' : 'claro');
    label.textContent = esOscuro ? '☀️' : '🌙';
});