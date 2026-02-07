# 🎨 Art Gallery - Galería de Arte

Aplicación web de galería de arte desarrollada con Node.js, Express y EJS.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

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

## 🌐 Deploy GRATIS

### Opción 1: Render.com (Recomendado) ⭐

**Ventajas:**
- ✅ Completamente gratis para proyectos pequeños
- ✅ Auto-deploy desde GitHub
- ✅ SSL gratis
- ✅ Fácil configuración

**Pasos:**

1. Ve a [render.com](https://render.com)
2. Crea una cuenta (puedes usar GitHub)
3. Click en "New +" → "Web Service"
4. Conecta tu repositorio `AndyV01/Galery`
5. Configuración:
   - **Name:** gallery-app (o el que prefieras)
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
6. Click en "Create Web Service"
7. ¡Espera 2-3 minutos y tu app estará live! 🎉

**URL final:** `https://tu-app.onrender.com`

---

### Opción 2: Railway.app

**Ventajas:**
- ✅ $5 de crédito gratis al mes
- ✅ Deploy ultra rápido
- ✅ Soporte de variables de entorno

**Pasos:**

1. Ve a [railway.app](https://railway.app)
2. Login con GitHub
3. Click en "New Project"
4. Selecciona "Deploy from GitHub repo"
5. Elige `AndyV01/Galery`
6. Railway detectará Node.js automáticamente
7. Click en "Deploy"
8. ¡Listo! 🚀

**URL final:** `https://tu-app.up.railway.app`

---

### Opción 3: Cyclic.sh

**Ventajas:**
- ✅ Completamente gratis
- ✅ Sin necesidad de tarjeta de crédito
- ✅ Deploy en segundos

**Pasos:**

1. Ve a [cyclic.sh](https://cyclic.sh)
2. Login con GitHub
3. Click en "Link Your Own"
4. Selecciona `AndyV01/Galery`
5. Click en "Connect"
6. ¡Deploy automático! ⚡

---

### Opción 4: Vercel (con configuración adicional)

**Nota:** Vercel está optimizado para Next.js, pero funciona con Express usando una configuración especial.

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. En la raíz del proyecto, crea `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/app.js"
    }
  ]
}
```

3. Deploy:
```bash
vercel
```

---

## 🔧 Configuración del Puerto

El proyecto ya está configurado para usar el puerto que provea el servicio de hosting:

```javascript
const PORT = process.env.PORT || 3000;
```

Esto funciona automáticamente en Render, Railway, Cyclic, etc.

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

El deploy se actualiza automáticamente en 1-2 minutos. 🎉

## 🐛 Solución de Problemas

### La app no inicia en local

```bash
# Borra node_modules y reinstala
rm -rf node_modules
npm install
npm start
```

### Error de puerto en uso

```bash
# Mata el proceso en el puerto 3000
# Windows
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Imágenes no cargan

- Verifica que estén en `/public/images/`
- Asegúrate de que las rutas sean relativas: `/images/foto.jpg`

## 📊 Comparación de Servicios de Hosting

| Servicio | Gratis | SSL | Auto-Deploy | Uptime |
|----------|--------|-----|-------------|---------|
| **Render** | ✅ | ✅ | ✅ | 99.9% |
| **Railway** | ⚠️ ($5/mes) | ✅ | ✅ | 99.9% |
| **Cyclic** | ✅ | ✅ | ✅ | 99.5% |
| **Vercel** | ✅ | ✅ | ✅ | 99.99% |

**Recomendación:** Usa **Render.com** para el mejor balance entre gratuito y confiable.

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
- Portfolio: [andyv01.github.io/portafolio](https://andyv01.github.io/portafolio/)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Hecho con ❤️ y Node.js**
