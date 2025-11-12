# 🎬 Catálogo de Películas - Aplicación Web

## 👥 Integrantes del grupo
- Belen Liguori
- Valentin Ullua

---

## 🧩 Descripción general

Esta aplicación web muestra un **catálogo interactivo de películas y series** utilizando HTML, CSS y JavaScript puro.  
Permite visualizar un listado inicial de títulos populares, buscar películas o series por nombre y acceder a una vista con los detalles de cada una (género, idioma, calificación, sinopsis, etc.).

La interfaz se compone de **tres vistas principales**:
1. **Inicio:** muestra una selección de títulos populares precargados.
2. **Buscar:** permite al usuario buscar películas o series por nombre en tiempo real.
3. **Detalles:** al seleccionar una película o serie, muestra información ampliada obtenida desde la API.

El diseño es **responsivo**, moderno y fácil de usar, y no requiere instalación de frameworks o dependencias externas.

---

## 🌐 API utilizada
- **Nombre:** [TVMaze API](https://www.tvmaze.com/api)
- **Descripción:** API pública que proporciona información sobre series y películas, incluyendo título, imagen, género, idioma, puntuación y sinopsis.  
- **Tipo:** Gratuita y sin autenticación (no requiere clave API).  
- **Ejemplo de endpoint:**  
  ```
  https://api.tvmaze.com/search/shows?q=arcane
  ```

---

## 🛠️ Instrucciones para ejecutar el proyecto

1. **Descargar o clonar** este repositorio:
   ```bash
   git clone https://github.com/usuario/catalogo-peliculas.git
   ```

2. **Abrir el proyecto:**
   - Navegá a la carpeta del proyecto.
   - Abrí el archivo `index.html` en tu navegador (doble clic o arrastrando el archivo al navegador).

3. **Usar la aplicación:**
   - En la vista de **Inicio**, se mostrarán algunas series o películas populares.
   - En la vista **Buscar**, ingresá el nombre de una serie o película y presioná el botón “Buscar”.
   - Hacé clic en cualquier tarjeta para ver los **detalles completos** del título seleccionado.

---

## 💻 Tecnologías utilizadas
- **HTML5** → estructura de la aplicación.  
- **CSS3** → diseño y estilos visuales.  
- **JavaScript (ES6)** → lógica y consumo de la API.  

