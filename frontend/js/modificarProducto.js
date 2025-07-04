const form = document.getElementById("form-editar");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.getElementById("producto-id").value;
    const sku = document.getElementById("sku").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const precio_normal = parseFloat(document.getElementById("precio_normal").value);
    const categoria = document.getElementById('categoria').value;
    const imagen = document.getElementById("imagen").value.trim();
    const activo = document.getElementById("activo").checked;

    const datosActualizados = { sku, nombre, precio_normal, categoria, imagen, activo };

    try {
        const response = await fetch(`/api/productos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados),
        });
        const result = await response.json();
        if (response.ok) {
            mensaje.textContent = "✅ Producto actualizado correctamente";
            mensaje.style.color = "green";
            setTimeout(() => {
                window.location.href = "/admin/dashboard";
            }, 500);
        } else {
            mensaje.textContent = `❌ Error: ${result.message || "No se pudo actualizar"}`;
            mensaje.style.color = "red";
        }
    } catch (err) {
        mensaje.textContent = "❌ Error de red o servidor";
        mensaje.style.color = "red";
        console.error(err);
    }
});