document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const mensaje = document.getElementById('mensaje');
    try {
        const response = await fetch('/api/admin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, contrasena }),
        });
        if (response.ok) {
            const data = await response.json();
            mensaje.textContent = `✅ Bienvenido ${data.usuario}`;
            mensaje.style.color = 'green';
            window.location.href = '/admin/dashboard';
        } else {
            const errorData = await response.json();
            mensaje.textContent = `❌ ${errorData.error || 'Login fallido'}`;
            mensaje.style.color = 'red';
        }
    } catch (err) {
        mensaje.textContent = 'Error al conectar con el servidor';
        mensaje.style.color = 'red';
    }
});
function autocompletar() {
    document.getElementById("usuario").value = "administrador";
    document.getElementById("contrasena").value = "21506005";
}