# FYH Ingenieros - Landing Page

Una landing page moderna y profesional para FYH Ingenieros, empresa de servicios tecnológicos con 9 años de experiencia.

## Características

### Diseño y UX
- **Diseño Moderno**: Interfaz limpia y profesional con paleta de colores corporativa
- **Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Animaciones**: Efectos suaves de scroll, hover y transiciones
- **Accesibilidad**: Cumple con estándares WCAG para accesibilidad web

### Funcionalidades
- **Navegación Suave**: Scroll suave entre secciones
- **Filtros de Servicios**: Sistema de filtrado dinámico para los 17 servicios
- **Formulario de Contacto**: Validación en tiempo real y envío de mensajes
- **Animaciones de Scroll**: Elementos aparecen al hacer scroll (Intersection Observer)
- **Menu Móvil**: Hamburger menu responsive
- **Contadores Animados**: Estadísticas con animación numérica

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Variables personalizadas, Flexbox, Grid, animaciones
- **JavaScript ES6+**: Funcionalidades interactivas sin frameworks externos
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## Estructura del Proyecto

```
landing_fyh/
├── index.html          # Estructura principal
├── styles.css          # Estilos y diseño responsive
├── script.js           # Funcionalidades interactivas
└── README.md           # Este archivo
```

## Secciones de la Landing Page

### 1. Header/Navegación
- Logo y tagline de la empresa
- Menú de navegación con enlaces suaves
- Botón CTA destacado

### 2. Hero Section
- Mensaje principal de valor
- Estadísticas de la empresa (9 años, 17 servicios, 100+ casos)
- Botones de llamada a la acción
- Animación de fondo con gradientes

### 3. Quiénes Somos
- Historia y experiencia de la empresa
- Características principales (Innovación, Enfoque Estratégico, Equipo Experto)
- Visualización de tecnologías

### 4. Servicios (17 servicios especializados)
Los servicios están organizados en categorías:

**Automatización:**
- Automatización de Procesos (RPA Tradicional)
- Automatización Inteligente (RPA + IA)
- Soporte y Mantenimiento de RPA
- Proyectos SAP y Automatización SAP

**Ciberseguridad:**
- Ciberseguridad Integral (TI)
- Ciberseguridad OT e Industria Crítica
- Seguridad en Inteligencia Artificial
- Desarrollo Seguro a Medida

**Inteligencia Artificial:**
- Bots Conversacionales e IA Aplicada
- Seguridad en IA (integrado con ciberseguridad)

**Infraestructura:**
- Monitoreo Digital y APIs
- Evaluación Técnica en Terreno (OT)
- Soporte TI y Automatización Técnica
- Outsourcing de Especialistas
- Infraestructura y Housing en Data Centers
- Licenciamiento y Soporte Tecnológico
- Obras Civiles y Telecomunicaciones
- Redes Industriales y TI-OT

### 5. Casos de Éxito
- Testimonios de clientes por sector
- Resultados cuantificables
- Industrias atendidas (Financiero, Energético, Minero)

### 6. Contacto
- Formulario de contacto con validación
- Información de contacto
- Horarios de atención

### 7. Footer
- Enlaces organizados por categorías
- Información legal
- Información de la empresa

## Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor web para desarrollo local

### Ejecución Local
1. Descarga o clona los archivos
2. Abre `index.html` en tu navegador web
3. ¡Listo! La página debe cargar completamente

### Para Producción
1. Sube los archivos a tu servidor web
2. Asegúrate de que todos los archivos estén en el mismo directorio
3. Configura el formulario de contacto con tu backend

## Personalización

### Colores
Los colores se definen en variables CSS en el archivo `styles.css`:
```css
:root {
    --primary-blue: #1e40af;
    --secondary-blue: #3b82f6;
    --accent-blue: #60a5fa;
    /* ... más colores */
}
```

### Contenido
- Modifica el texto en `index.html`
- Agrega o elimina servicios en la sección correspondiente
- Actualiza información de contacto

### Estilos
- Personaliza colores, fuentes y espaciado en `styles.css`
- Todas las medidas usan variables CSS para fácil mantenimiento

### Funcionalidades
- Modifica comportamientos en `script.js`
- Todas las funciones están documentadas

## Optimizaciones Incluidas

### Performance
- CSS optimizado con variables personalizadas
- JavaScript modular y eficiente
- Lazy loading para imágenes
- Throttling en eventos de scroll

### SEO
- Estructura HTML semántica
- Meta tags apropiadas
- Jerarquía de headings correcta
- URLs amigables en navegación

### Accesibilidad
- Contraste de colores apropiado
- Navegación por teclado
- Texto alternativo para elementos visuales
- Soporte para lectores de pantalla

## Compatibilidad

### Navegadores Soportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dispositivos
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Ultra wide (1536px+)

## Próximas Mejoras

### Funcionalidades Sugeridas
- [ ] Integración con Google Analytics
- [ ] Chatbot en vivo
- [ ] Blog/Noticias
- [ ] Portal de clientes
- [ ] Calculadora de ROI
- [ ] Testimonios en video
- [ ] Multi-idioma (inglés)
- [ ] PWA (Progressive Web App)

### Integraciones Backend
- [ ] API para formulario de contacto
- [ ] CRM integration
- [ ] Newsletter signup
- [ ] Live chat integration

## Soporte

Para modificaciones o soporte técnico, contacta al equipo de desarrollo.

## Licencia

© 2024 FYH Ingenieros. Todos los derechos reservados.

---

**Desarrollado con:** HTML5, CSS3, JavaScript ES6+
**Optimizado para:** Performance, SEO, Accesibilidad
**Compatible con:** Todos los dispositivos y navegadores modernos