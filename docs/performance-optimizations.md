# Optimización de Rendimiento para AI Landing Page

Este documento detalla las recomendaciones para optimizar el rendimiento de la landing page de IA, mejorando significativamente los Core Web Vitals y la experiencia de usuario.

## Core Web Vitals

Los Core Web Vitals son métricas esenciales de Google para medir la experiencia de usuario en la web:

| Métrica | Descripción | Objetivo |
|---------|-------------|----------|
| **LCP** (Largest Contentful Paint) | Mide el tiempo que tarda en cargarse el contenido principal | < 2.5 segundos |
| **FID** (First Input Delay) | Mide la interactividad de la página | < 100 ms |
| **CLS** (Cumulative Layout Shift) | Mide la estabilidad visual | < 0.1 |

## Optimizaciones Recomendadas

### 1. Optimización de Imágenes

Las imágenes son normalmente el recurso más pesado en una landing page. Recomendamos:

```jsx
// Ejemplo usando next/image para optimización automática
import Image from 'next/image';

<Image 
  src="/images/ai-skin-analysis.webp"
  alt="Análisis de piel mediante IA"
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/..."
  priority={true} // Para imágenes above the fold
  quality={85}
/>
```

Implementar:

- Formato WebP o AVIF para todas las imágenes (con fallbacks para navegadores antiguos)
- Lazy loading para imágenes below the fold
- Dimensiones explícitas para evitar layout shifts
- Carga prioritaria para imágenes críticas en el viewport inicial
- Imágenes responsivas con srcSet para diferentes tamaños de pantalla

### 2. Optimización de JavaScript

Reducir el impacto del JavaScript en el tiempo de carga:

```js
// Ejemplo de importación dinámica
import dynamic from 'next/dynamic';

// Componente cargado solo cuando es necesario
const AISkinAnalyzer = dynamic(() => import('../components/AISkinAnalyzer'), {
  ssr: false, // Si no es necesario renderizar en servidor
  loading: () => <p>Cargando analizador de piel...</p>
});
```

Implementar:

- Code splitting para reducir el tamaño del bundle inicial
- Importaciones dinámicas para componentes pesados no críticos
- Optimización de dependencias (eliminar dependencias no utilizadas)
- Minimizar y comprimir archivos JavaScript

### 3. Estrategia de Precarga y Prefetch

```html
<!-- En el head del documento -->
<link rel="preload" href="/fonts/isdin-sans.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://api.isdin.com">
<link rel="dns-prefetch" href="https://api.isdin.com">
```

Implementar:

- Preload de recursos críticos (fuentes, CSS crítico)
- Preconnect para APIs externas
- Prefetch para rutas probables de navegación

### 4. Optimización de CSS

```jsx
// Ejemplo con Tailwind y critical CSS
import '@/styles/critical.css'; // Inline critical CSS
import dynamic from 'next/dynamic';

// Cargar estilos no críticos después
const NonCriticalStyles = dynamic(() => import('../components/NonCriticalStyles'), {
  ssr: false
});
```

Implementar:

- Critical CSS inline para renderizado inicial
- Purgar clases CSS no utilizadas (especialmente importante con Tailwind)
- Minimizar y comprimir CSS
- Cargar estilos no críticos de forma asíncrona

### 5. Optimización de Web Fonts

```css
/* En archivos CSS */
@font-face {
  font-family: 'ISDIN Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* Previene FOUT */
  src: url('/fonts/isdin-sans.woff2') format('woff2');
}
```

Implementar:

- Formato WOFF2 para todas las fuentes (con fallbacks)
- Estrategia font-display: swap para evitar texto invisible
- Precargar fuentes críticas
- Limitar variantes de fuentes para reducir el tamaño de carga

### 6. Optimización del Server-Side Rendering (SSR)

Para asegurar que el contenido principal se carga rápidamente:

```jsx
// En páginas Next.js
export async function getStaticProps() {
  // Obtener datos necesarios para la página en build time
  const productData = await fetchProductData();
  
  return {
    props: {
      products: productData,
    },
    // Regenerar la página cada 24 horas
    revalidate: 86400,
  };
}
```

Implementar:

- Static Site Generation (SSG) para contenido que no cambia frecuentemente
- Incremental Static Regeneration para actualizar páginas de forma periódica
- Streaming SSR para contenido dinámico para mejorar TTFB

### 7. Implementación de Service Workers

```js
// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('isdin-ai-landing-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/css/style.min.css',
        '/js/main.min.js',
        '/images/logo.webp',
        // Otros recursos importantes
      ]);
    })
  );
});

// En tu archivo principal
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
```

Implementar:

- Caché de recursos estáticos
- Experiencia offline para funcionalidades básicas
- Estrategias de caché adecuadas (stale-while-revalidate, network-first, etc.)

### 8. Optimización de Third-Party Scripts

```jsx
// Cargar Analytics de forma eficiente
import Script from 'next/script';

// En tu componente
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
/>
```

Implementar:

- Cargar scripts de terceros de forma asíncrona o diferida
- Usar resource hints para preconectar a dominios de terceros
- Evaluar y eliminar scripts innecesarios
- Implementar tag managers para mejor control

## Herramientas Recomendadas para Medición

- **Lighthouse**: Auditorías completas de rendimiento
- **WebPageTest**: Pruebas detalladas de carga en diferentes condiciones
- **Chrome DevTools Performance**: Análisis detallado de runtime
- **Core Web Vitals Report**: Datos reales de usuarios desde Google Search Console

## Plan de Implementación

1. Realizar auditoría inicial de rendimiento (Lighthouse)
2. Implementar optimizaciones de imágenes (prioridad alta)
3. Optimizar JavaScript y CSS crítico (prioridad alta)
4. Implementar estrategias de carga y precarga (prioridad media)
5. Configurar service workers para caché (prioridad media)
6. Optimizar third-party scripts (prioridad media)
7. Realizar auditoría posterior y ajustes finales

## Impacto Esperado

| Métrica | Valor Actual (estimado) | Objetivo | Mejora Esperada |
|---------|-------------------------|----------|-----------------|
| **LCP** | ~4.2s | <2.5s | 40% |
| **FID** | ~180ms | <100ms | 45% |
| **CLS** | ~0.18 | <0.1 | 45% |
| **Lighthouse Score** | ~65 | >90 | 38% |
| **Page Weight** | ~3.8MB | <1.5MB | 60% |
| **Time to Interactive** | ~5.2s | <3.5s | 33% |

Estas optimizaciones no solo mejorarán el rendimiento técnico, sino también las métricas de negocio como tasas de conversión, tiempo de permanencia en página y engagement general de los usuarios.
