function editarProducto(id) {
    alert(`Editar producto con ID: ${id}`);
    window.location.href = `/admin/productos/${id}/editar/`;
}

async function inactivarProducto(id) {
    const confirmado = confirm("¿Seguro que querés inactivar este producto?");
    if (!confirmado) return;
    try {
        const response = await fetch(`/api/productos/desactivar/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        if (response.ok) {
            alert("✅ Producto inactivado correctamente");
            location.reload();
        } else {
            alert(`❌ Error al inactivar: ${result.message}`);
        }
    } catch (error) {
        console.error("Error al inactivar producto:", error);
        alert("❌ Error del servidor o de red");
    }
}