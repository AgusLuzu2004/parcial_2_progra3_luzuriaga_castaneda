const form = document.getElementById('form-crear');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
        const response = await fetch('/api/productos', {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        if (response.ok) {
            mensaje.textContent = '✅ Producto creado correctamente';
            mensaje.style.color = 'green';
            form.reset();
            setTimeout(() => {
                window.location.href = '/admin/dashboard';
            }, 500);
        } else {
            mensaje.textContent = `❌ Error: ${result.message || 'No se pudo crear el producto'}`;
            mensaje.style.color = 'red';
        }
    } catch (error) {
        mensaje.textContent = '❌ Error de red o servidor';
        mensaje.style.color = 'red';
        console.error(error);
    }
});