# Quackenio

Sitio web estatico de Quackenio (cafeteria con narrativa y branding "duck"), construido con HTML, CSS y JavaScript vanilla.

No requiere build step ni framework para ejecutarse.

## Estado actual

El proyecto ya incluye:

- Tema base + faceta tropical seasonal.
- Sistema de noticias dinamico (home + archivo) desde un solo archivo de datos.
- Modo de traduccion "Quackquackence" con toggle persistente.
- Efectos de sonido "quack" en interacciones.
- Visor de galeria (zoom, navegacion, teclado, rueda y swipe).
- Formulario de contacto con validacion del lado del cliente.

## Estructura del proyecto

- [index.html](index.html): home (hero, especialidades, noticias destacadas, CTA de evaluacion).
- [about.html](about.html): historia, retratos, collage y secciones narrativas.
- [menu.html](menu.html): menu por categorias.
- [news.html](news.html): archivo completo de noticias.
- [contact.html](contact.html): formulario, horarios y datos de contacto.
- [styles.css](styles.css): estilos globales, responsive, componentes y overrides tematicos.
- [script.js](script.js): logica de UI e interacciones (nav, noticias, quack mode, galeria, audio, form, reveal).
- [news/news-data.js](news/news-data.js): fuente unica de publicaciones.
- [audio/](audio/): efectos de sonido.
- [images/](images/): imagenes de branding y contenido.
- [designs/](designs/): guias de diseno y seleccion de guias.

## Funcionalidades principales

- Navegacion responsive con menu hamburguesa.
- Marcado automatico de link activo en navbar.
- Render dinamico de noticias en home (destacada) y en pagina de archivo (todas).
- Orden de noticias por fecha descendente.
- Fallback visual cuando no hay noticias publicadas.
- Modo Quackquackence:
	- Traduce texto visible y atributos (placeholder, aria-label, title, alt).
	- Persiste estado en localStorage.
- Efecto de sonido quack en botones, tabs y links de navegacion.
- Scroll reveal para elementos clave.
- Formulario de contacto con validaciones basicas y envio simulado.
- Modal de galeria para imagenes con controles de zoom y navegacion.

## Temas y guias de diseno

Documentacion disponible:

- [designs/DESIGN.md](designs/DESIGN.md): guia base del sitio.
- [designs/DESIGN_TROPICAL.md](designs/DESIGN_TROPICAL.md): guia de la faceta tropical seasonal.
- [designs/GUIDE_SELECTION.md](designs/GUIDE_SELECTION.md): cuando y como usar cada guia.

## Como ejecutar localmente

Opciones:

1. Abrir [index.html](index.html) directamente en el navegador.
2. Levantar un servidor local estatico (recomendado).

Ejemplo con Python:

```bash
python -m http.server 8000
```

En Windows, si aplica:

```bash
py -m http.server 8000
```

Abrir:

- `http://localhost:8000`

## Como agregar noticias

Editar [news/news-data.js](news/news-data.js) y agregar un objeto al array `window.QUACKENIO_NEWS` con estos campos:

- `id`
- `date` (YYYY-MM-DD)
- `title`
- `category`
- `image`
- `imageAlt`
- `excerpt`

Recomendaciones:

- Usar rutas relativas correctas en `image` (por ejemplo `news/archivo.jpeg`).
- Mantener fechas validas para orden correcto.

## Notas tecnicas

- El formulario de contacto no envia datos a backend; es simulacion client-side.
- Los enlaces de evaluacion apuntan a Microsoft Forms.
- El proyecto esta mayormente en espanol con copy de marca en ingles.
