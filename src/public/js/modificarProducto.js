const form = document.getElementById("form-editar");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.getElementById("producto-id").value;
    const formData = new FormData(form);

    try {
        const response = await fetch(`/api/productos/${id}`, {
            method: 'PUT',
            body: formData,
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