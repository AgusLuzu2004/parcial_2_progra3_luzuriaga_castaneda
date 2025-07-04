const form = document.getElementById('form-crear');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const sku = document.getElementById('sku').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const precio_normal = parseFloat(document.getElementById('precio_normal').value);
    const categoria = document.getElementById('categoria').value;
    const imagen = document.getElementById('imagen').value.trim();
    const activo = document.getElementById('activo').checked;

    const nuevoProducto = { sku, nombre, precio_normal, categoria, imagen, activo };

    try {
        const response = await fetch('/api/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto),
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