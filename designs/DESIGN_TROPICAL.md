# Quackenio Tropical Design Guide

## 1. Objetivo de la faceta tropical
Esta guia documenta la fase visual tropical/seasonal de Quackenio.
El objetivo es mantener una experiencia playera, alegre y luminosa, sin perder legibilidad ni consistencia de marca.

Principios clave:
- Atmosfera de playa: agua, arena, atardecer, vegetacion tropical.
- Contraste funcional: textos y CTAs siempre claros sobre fondos complejos.
- Marca juguetona: puns y tono cercano siguen activos.

## 2. Direccion visual
La faceta tropical cambia la base oscura por una narrativa de color mas calida y vacacional:
- Fondos aqua/turquesa para cielo y mar.
- Superficies crema y arena para contenido.
- Acentos naranja/amarillo para acciones y branding.

## 3. Design tokens (tema tropical)
Definidos en el bloque seasonal de [styles.css](../styles.css):

### 3.1 Colores base
- --black: #0d5d66
- --dark: #0b7f87
- --dark-card: #fff4cc
- --yellow: #f7c948
- --yellow-hover: #eab934
- --orange: #f08a24
- --white: #14363d
- --gray: #386168
- --light-bg: #fff7de

### 3.2 Alias semanticos
- --bg: #7adce4
- --bg-section: #ffeeb7
- --bg-alt: #fff4cf
- --text: #14363d
- --text-muted: #456e74
- --accent: #f08a24
- --shadow: rgba(11, 67, 74, 0.25)

### 3.3 Tipografia
- Heading/display: Lilita One (fallback Bebas Neue)
- Body/UI: Barlow Condensed (fallback Inter)

## 4. Componentes y patrones tropicales

### 4.1 Background global
El body usa capas con gradientes para sugerir cielo, mar y arena, con halos suaves en esquinas.

### 4.2 Navbar
- Barra clara y redondeada sobre top sticky.
- Detalles en naranja para bordes y estados activos.
- Links con contraste azul profundo para lectura rapida.

### 4.3 Hero principal
- Fondo con imagen real: images/background.png.
- Overlay oscuro en gradiente para legibilidad.
- Glow radial y decoracion ondulada en la base (hero::after).

### 4.4 Titulos y divisores
- Section titles en azul profundo.
- Palabras acento en naranja.
- Divisor con gradiente naranja-amarillo y radio alto.

### 4.5 Botones
- Botones con bordes tipo pill.
- Primario en gradiente naranja-amarillo.
- Outline claro con borde turquesa suave.

### 4.6 Cards y superficies
- Cards en crema/arena con borde turquesa sutil.
- Iconos principales en marcos circulares (look tipo badge tropical).
- Elevacion suave con sombras calidas.

## 5. Reglas de implementacion
- Si una regla base y una seasonal afectan el mismo selector, la seasonal debe ser la fuente de verdad.
- Mantener consistencia de color en hover/focus con la paleta tropical.
- Evitar introducir morados o grises frios que rompan el mood de playa.
- Para nuevos fondos con imagen, siempre usar overlay para asegurar contraste de texto.

## 6. Responsive
Breakpoints activos:
- 768px: nav movil y grids a una columna.
- 480px: compactacion de cards y formularios.

Notas tropical mobile:
- Preservar legibilidad de texto sobre fondos con imagen.
- Reducir ruido visual de efectos decorativos si el viewport es pequeno.

## 7. Accesibilidad
Checklist minimo para esta faceta:
- Verificar contraste de texto en hero sobre imagen real.
- Mantener focus visible en botones y links.
- Confirmar que subtitulos en tonos medios se lean en pantallas con bajo brillo.

## 8. Assets recomendados
- Hero principal: images/background.png
- Branding: images/logo.png
- Cards: images/cafe1.png, images/cafe2.png, images/cafe3.png

## 9. QA rapido antes de publicar
- Hero muestra image/background.png en home.
- Navbar y CTA conservan contraste en desktop y mobile.
- Cards circulares no se deforman en breakpoints.
- Textos secundarios siguen legibles sobre fondos claros.
- Footer y secciones internas mantienen coherencia tropical.

## 10. Evolucion futura
Para una siguiente iteracion tropical:
- Agregar variantes por temporada (verano, sunset, rainy tropic) como subtemas.
- Extraer tokens tropicales a un bloque separado o archivo de tema.
- Definir un set de ilustraciones/patrones decorativos reutilizables.
