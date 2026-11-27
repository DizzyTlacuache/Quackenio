# Quackenio Christmas Design Guide

## 1. Objetivo
Celebrar la Navidad en México con una experiencia cálida de café y comunidad, inspirada en las posadas y las tradiciones compartidas.

## 2. Dirección visual
- Verde pino y tonos oscuros de noche para enmarcar el contenido.
- Dorado de luces y velas para acciones y jerarquía.
- Rojo nochebuena como acento, acompañado de marfil cálido.
- El hero muestra un nacimiento, una piñata, nochebuenas y papel picado. Tratar el nacimiento con respeto y dejar que la imagen cuente la tradición sin convertirla en un adorno interactivo.
- Mantener las fotografías de productos y noticias como protagonistas.

## 3. Tokens de tema
Los tokens se definen en `.theme-christmas` dentro de [styles.css](../styles.css):

| Token | Valor | Uso |
| --- | --- | --- |
| `--black` | `#101e1b` | Fondo nocturno |
| `--dark` | `#172d28` | Secciones y controles |
| `--dark-card` | `#233c34` | Tarjetas |
| `--yellow` | `#f2c56f` | Luz cálida y acciones |
| `--orange` | `#d78a56` | Acento cálido |
| `--accent-2` | `#a63e3e` | Rojo nochebuena |
| `--white` | `#fff5e3` | Texto principal |
| `--gray` | `#e3d6c1` | Texto secundario |

Display usa Playfair Display con fallback a Bebas Neue; el cuerpo usa Lora con fallback a Inter.

## 4. Componentes
- **Hero:** `images/background_christmas.jpg` con overlay para legibilidad; en móvil se prioriza el lado del nacimiento.
- **Navegación y superficies:** verdes oscuros con detalles dorados y estados activos visibles.
- **Botones:** dorado con texto oscuro para la acción principal; secundarios oscuros con contorno claro.
- **Cards, formularios y noticias:** superficies por capas, foco visible e imágenes editoriales sin recorte.
- **Detalle estacional:** franja discreta en rojo, dorado y verde, inspirada en los colores festivos de la imagen.
- **Nieve:** copos sutiles en todas las páginas del tema, sin interferir con controles ni contenido.

## 5. Voz y accesibilidad
- Español cercano con guiños de pato y referencias a posadas y convivencia, sin inventar productos o promociones.
- No cambiar precios, horarios, rutas o datos de contacto.
- Conservar navegación móvil, contraste y foco visible; desactivar la nieve cuando se prefiera movimiento reducido.

## 6. Aplicación
Las páginas usan la clase `theme-christmas` en `<body>`. La estructura sigue la guía base; esta guía define la capa estacional.
