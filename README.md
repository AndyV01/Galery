# 🎨 Art Gallery - Galería de Arte

Aplicación web de galería de arte desarrollada con Node.js, Express y EJS.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## 🌐 Demo en vivo

👉 **https://gallery-0jqi.onrender.com/**

---

## 🌟 Características

- 📸 Galería de imágenes con slider
- 📱 Diseño responsive optimizado para móviles
- 🎨 Interfaz limpia y moderna
- ⚡ Servidor Node.js con Express
- 🔄 Templates dinámicos con EJS

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ 
- npm

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/AndyV01/Galery.git
cd Galery
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm start
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
Galery/
├── app.js              # Servidor Express principal
├── package.json        # Dependencias del proyecto
├── procfile           # Configuración para deployment
├── public/            # Archivos estáticos
│   ├── css/          # Estilos
│   ├── js/           # JavaScript del cliente
│   └── images/       # Imágenes de la galería
└── views/            # Templates EJS
    └── *.ejs         # Vistas de la aplicación
```


## 🔧 Configuración del Puerto

El proyecto ya está configurado para usar el puerto que provea el servicio de hosting:

```javascript
const PORT = process.env.PORT || 3000;
```

## 📝 Scripts Disponibles

```bash
# Iniciar servidor
npm start

# Desarrollo con nodemon (auto-reload)
npm run dev
```

## 🎨 Personalización

### Agregar imágenes a la galería

1. Coloca tus imágenes en `/public/images/`
2. Actualiza las referencias en los templates EJS
3. Las imágenes se cargarán automáticamente

### Modificar estilos

- Edita los archivos CSS en `/public/css/`
- Los cambios se aplicarán automáticamente

## 🔄 Actualizar Deploy

Todos los servicios mencionados tienen **deploy automático** cuando haces push a GitHub:

```bash
git add .
git commit -m "Actualización de la galería"
git push origin master
```

## 📊 Comparación de Servicios de Hosting

| Servicio | Gratis | SSL | Auto-Deploy | Uptime |
|----------|--------|-----|-------------|---------|
| **Render** | ✅ | ✅ | ✅ | 99.9% |


## 🚀 Mejoras Futuras

- [ ] Sistema de autenticación
- [ ] Upload de imágenes desde el navegador
- [ ] Base de datos para metadata de imágenes
- [ ] Sistema de comentarios
- [ ] Lightbox para vista ampliada
- [ ] Categorías y tags
- [ ] Búsqueda de imágenes
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**Andrés Vallarino**

- GitHub: [@AndyV01](https://github.com/AndyV01)
- Portfolio: [andyv01.github.io/portafolio](https://portfolio-nextjs-nine-lac.vercel.app/)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Hecho con ❤️ y Node.js**
