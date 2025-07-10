# Proyecto: Autoservicio de Fútbol

Este proyecto es un sistema completo de autoservicio para la compra de productos oficiales de fútbol, desarrollado con Node.js, Express, Sequelize, EJS y MySQL.

Incluye:

* Registro y visualización de productos.
* Carrito de compras.
* Generación de tickets.
* Panel de administrador para alta, baja y modificación de productos.
* Subida de imágenes.

---

## 📁 Estructura del Proyecto

```
nombre de carpeta/
├── src/
│   ├── app.js               # Servidor principal
│   ├── routes/              # Rutas Express
│   ├── controllers/         # Lógica de negocio
│   ├── models/              # Modelos Sequelize
│   ├── services/            # Servicios de base de datos
│   ├── config/              # Configuraciones (DB, .env)
│   ├── middlewares/          # Middlewares personalizados
│   ├── public/
│   │   ├── views/           # Vistas EJS para el admin
│   │   ├── img/             # Imágenes subidas
│   │   └── css/js           # Estilos y scripts del backend
├── frontend/
│   ├── vistas/              # HTML del cliente
│   ├── js/                  # Lógica del cliente
│   ├── css/                 # Estilos cliente
├── .env
├── package.json
├── crearAdmin.js           # Script para crear el admin
```

---

## 🛠 Tecnologías Usadas

* **Node.js** y **Express**
* **Sequelize** (ORM) y **MySQL2**
* **EJS** para vistas del administrador
* **Multer** para subir imágenes
* **Bootstrap** para diseño visual
* **HTML/CSS/JS** para frontend
* **Session** para login admin

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Clonar el repositorio

`git clone https://github.com/AgusLuzu2004/parcial_2_progra3_luzuriaga_castaneda.git
cd parcial_2_progra3_luzuriaga_castaneda`

### 2. Instalar dependencias

`npm install`

### 3. Configurar el entorno

Crear un archivo `.env` con los datos correspondientes.

### 4. Crear base de datos

Ejecutar script SQL que cree las tablas `productos`, `pedidos`, `detalle_pedido`, `administradores`, etc.

### 5. Crear admin por defecto

`node crearAdmin.js`

### 6. Iniciar el servidor

`npm run dev`

---

## 🧪 Funcionalidades

### 🛍 Cliente

* Ingresar nombre para comenzar.
* Navegar productos.
* Agregar productos al carrito.
* Finalizar compra.
* Ver ticket generado con resumen y PDF descargable.

### 🛠 Administrador

* Login por sesión.
* Listado de productos.
* Crear nuevo producto.
* Editar producto existente.
* Desactivar producto.
* Subir imagen personalizada para cada producto.

---

## 🔐 Seguridad

* Contraseña de administrador cifrada con `bcrypt`.
* Control de acceso con `express-session` y middleware `isAdmin`.
* Límites de tamaño y tipo en subida de imágenes (solo imágenes y hasta 5MB).

---

## 📂 Subida de Imágenes

* Las imágenes se suben desde el panel admin.
* Se almacenan en `/src/public/img`.
* Se valida si ya existe una imagen con el mismo nombre.
* Si existe, se marca y luego se elimina para evitar duplicados.

---

## 👥 Autores

* Agustín Luzuriaga
* Efren Castañeda
