// Importar dependencias
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

// Crear aplicación Express
const app = express();

// Puerto - usa variable de entorno o 3000 por defecto
const PORT = process.env.PORT || 3000;

// ========================================
// MIDDLEWARE DE SEGURIDAD
// ========================================

// Helmet - Seguridad HTTP headers
app.use(helmet({
  contentSecurityPolicy: false, // Desactivar si tienes problemas con CSS/JS inline
}));

// CORS - Configurar según necesites
app.use(cors());

// Compresión gzip
app.use(compression());

// ========================================
// CONFIGURACIÓN
// ========================================

// Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Body parser para formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ========================================
// RUTAS
// ========================================

// Ruta principal - home.ejs
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Galería de Arte',
    description: 'Explora nuestra colección de arte'
  });
});

// Ruta de noticias - news.ejs
app.get('/news', (req, res) => {
  res.render('news', {
    title: 'Noticias',
    description: 'Últimas noticias de la galería'
  });
});

// Ruta de contacto - contact.ejs
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contacto',
    description: 'Ponte en contacto con nosotros'
  });
});

// POST para formulario de contacto (si lo necesitas)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Aquí puedes procesar el formulario
  console.log('Formulario recibido:', { name, email, message });
  
  // Por ahora solo redirige de vuelta
  res.redirect('/contact?success=true');
});

// ========================================
// MANEJO DE ERRORES
// ========================================

// 404 - Página no encontrada - usa 404.ejs
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Página no encontrada'
  });
});

// Error handler general - usa error.ejs
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).render('error', {
    title: 'Error del servidor',
    message: process.env.NODE_ENV === 'production' 
      ? 'Algo salió mal' 
      : err.message
  });
});

// ========================================
// INICIAR SERVIDOR
// ========================================

app.listen(PORT, () => {
  console.log(`\n🚀 ========================================`);
  console.log(`   Servidor corriendo en:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`========================================`);
  console.log(`📁 Archivos estáticos: /public`);
  console.log(`🎨 Templates EJS: /views`);
  console.log(`\n📄 Rutas disponibles:`);
  console.log(`   GET  /           → home.ejs`);
  console.log(`   GET  /news       → news.ejs`);
  console.log(`   GET  /contact    → contact.ejs`);
  console.log(`   POST /contact    → Procesar formulario`);
  console.log(`========================================\n`);
});

// Manejo de cierre graceful
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM recibido, cerrando servidor...');
  process.exit(0);
});

module.exports = app;