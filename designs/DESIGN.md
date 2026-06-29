# Quackenio Design Guide

## 1. Vision de la experiencia
Quackenio comunica una marca energetica, calida y memorable con una personalidad juguetona (duck puns) y una ejecucion visual premium de cafeteria.

La experiencia se apoya en tres ideas:
- Contraste alto y legibilidad fuerte
- Jerarquia tipografica expresiva
- Interacciones simples con feedback claro

## 2. Identidad visual
### 2.1 Direccion estetica
- Base oscura para enmarcar contenido e imagenes
- Acentos amarillos para accion y branding
- Superficies oscuras por capas para profundidad visual

### 2.2 Voz de marca
- Cercana, dinamica y con humor ligero
- Mezcla espanol + ingles en frases de branding
- Puns de pato en CTAs y microcopy

## 3. Design tokens actuales
### 3.1 Color
Colores base definidos en :root:

- Negro principal: #0d0d0d
- Oscuro secundario: #1a1a1a
- Tarjeta oscura: #222222
- Amarillo marca: #FFD600
- Amarillo hover: #e6c200
- Blanco: #ffffff
- Gris texto secundario: #aaaaaa

Alias semanticos:
- Fondo global: --bg
- Fondo de seccion: --bg-section
- Texto principal: --text
- Texto secundario: --text-muted
- Acento: --accent
- Radio base: --radius (12px)
- Transicion base: --transition (0.3s ease)

### 3.2 Tipografia
- Titulos y display: Bebas Neue
- Cuerpo e interfaces: Inter

Uso:
- Titulares seccion y marca: alto tracking, mayusculas
- Cuerpo: legible, con interlineado amplio

### 3.3 Espaciado y contenedor
- Contenedor maximo: 1100px
- Padding horizontal contenedor: 1.5rem
- Separacion vertical de seccion: 5rem

## 4. Layout y estructura
### 4.1 Navegacion
- Navbar sticky con borde inferior amarillo
- Estado activo y hover con subrayado animado
- Version movil con menu hamburger desplegable

### 4.2 Hero
- Composicion centrada
- Glow radial amarillo en background
- Titular de alto impacto + tagline ligera
- Grupo de botones primario/secundario

### 4.3 Secciones de contenido
- Titulo de seccion + divisor amarillo + subtitulo
- Alternancia de fondos negro/oscuro para ritmo visual
- Uso de grids de 2 columnas para texto/imagen

### 4.4 Tarjetas
- Cards de especialidades y bloques informativos
- Bordes sutiles con acento amarillo en hover
- Elevacion visual por sombra y desplazamiento leve

## 5. Componentes base
### 5.1 Botones
- Primario: fondo amarillo, texto negro
- Outline: transparente, borde claro
- Dark (banner): fondo negro, texto amarillo
- Comportamiento: elevacion en hover con sombra

### 5.2 Imagenes
- Imagenes de historia: contain y centradas para evitar recortes
- Retratos del linaje: contain y fondo oscuro para marco limpio
- Collages: borde sutil y sombra profunda

### 5.3 Formularios
- Inputs oscuros con focus ring amarillo
- Etiquetas uppercase con tracking
- Mensajes de estado (success/error)

## 6. Motion e interaccion
### 6.1 Animacion y transiciones
- Reveal por IntersectionObserver en elementos seleccionados
- Hover states consistentes en links, cards y botones
- Sombra dinamica en navbar al hacer scroll

### 6.2 Sonido
- SFX de cuack en interacciones de botones y navegacion
- Variacion de tono/volumen para evitar repeticion

### 6.3 Visor de imagenes (About)
- Modal con backdrop oscuro
- Navegacion anterior/siguiente
- Zoom in/out
- Soporte de teclado, rueda, doble clic y swipe

## 7. Responsive behavior
Breakpoints activos:
- 768px: menu movil, grids en una columna
- 480px: simplificacion de cards y ajustes de espaciado

Principios responsive:
- Priorizar legibilidad sobre densidad
- Mantener jerarquia visual de titulos
- Conservar areas tocables amplias en movil

## 8. Accesibilidad
Buenas practicas actuales:
- Texto alternativo en imagenes principales
- Labels en formulario
- Aria labels en navegacion y modal

Mejoras sugeridas:
- Revisar contraste de subtitulos grises en pantallas de bajo brillo
- Asegurar foco visible para todos los controles del modal
- Validar orden de tabulacion en menu movil y visor

## 9. Patron de secciones de About
Estructura recomendable para nuevas secciones de historia:
1. Titulo de seccion con palabra acento en amarillo
2. Subtitulo corto
3. Grid texto-imagen (alternando orientacion por bloque)
4. Caption de imagen en estilo uppercase suave
5. Cierre con CTA o frase de continuidad

## 10. Criterios para evolucion visual
Cuando se agreguen nuevas paginas o componentes:
- Reutilizar tokens antes de crear nuevos colores
- Mantener Bebas Neue para titulos de alto nivel
- Reservar amarillo para accion y elementos de marca
- Evitar fondos claros dominantes que rompan identidad
- Conservar tono playful, sin sacrificar legibilidad

## 11. Checklist rapido de consistencia
- El acento principal sigue siendo amarillo marca
- Titulos de seccion mantienen estilo y jerarquia
- Botones usan variantes existentes
- Las imagenes no se recortan en bloques narrativos
- Navegacion y footer son consistentes en todas las paginas
- Estados hover/focus son visibles y coherentes
