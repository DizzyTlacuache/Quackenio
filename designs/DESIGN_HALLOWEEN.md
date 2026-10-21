# Quackenio Halloween Design Guide

## 1. Objetivo
Crear una temporada de Halloween reconocible desde México, inspirada en el Día de Muertos y en las tradiciones de memoria, comunidad y celebración. La capa visual debe sentirse cálida y festiva, no como una estética genérica de terror.

## 2. Dirección visual
- Noche de tinta y ciruela como marco para el contenido.
- Naranja cempasúchil para luz, orientación y acciones.
- Rosa bugambilia como acento secundario en detalles y degradados.
- Referencias sutiles a papel picado y ofrenda; evitar saturar la interfaz de calaveras o clichés.
- Mantener fotografía de la cafetería y productos como protagonistas.

Halloween y Día de Muertos son celebraciones distintas. Esta temporada de marca toma elementos visuales mexicanos con respeto, sin presentar sus tradiciones como simple decoración de miedo.

## 3. Tokens de tema
Los tokens se definen en `.theme-halloween` dentro de [styles.css](../styles.css):

| Token | Valor | Uso |
| --- | --- | --- |
| `--black` | `#160f1b` | Fondo nocturno |
| `--dark` | `#24182b` | Secciones y controles |
| `--dark-card` | `#32213a` | Tarjetas |
| `--yellow` | `#f4ad32` | Cempasúchil, acción y estados |
| `--orange` | `#e86f3a` | Acento cálido |
| `--accent-2` | `#d14e83` | Bugambilia |
| `--white` | `#fff3df` | Texto principal |
| `--gray` | `#c9b9c8` | Texto secundario |

Display usa Cinzel con fallback a Bebas Neue; el cuerpo usa Lora con fallback a Inter.

## 4. Componentes
- **Fondo:** gradientes nocturnos sutiles con resplandores cálidos; preservar contraste y evitar texturas ruidosas.
- **Navegación:** ciruela oscura, filete cempasúchil y estados activos claramente visibles.
- **Hero:** ilustración de temporada `images/background_halloween.jpg`, overlay oscuro y un borde inferior geométrico inspirado en papel picado.
- **Títulos y divisores:** marfil para lectura; degradado rosa-cempasúchil para jerarquía.
- **Botones:** primario cempasúchil de alto contraste; secundario oscuro con contorno claro.
- **Cards y formularios:** superficies ciruela por capas, bordes cálidos y estados de foco visibles.
- **Noticias:** conservar las imágenes originales sin recorte en sus bloques editoriales.

## 5. Voz y contenido
- Preferir español cercano y guiños ligeros de pato.
- Referencias locales como cempasúchil, ofrenda y papel picado deben ser intencionales y respetuosas.
- Evitar cambiar contenido funcional (precios, horarios, rutas o datos de contacto) por el tema.

## 6. Responsive y accesibilidad
- Conservar el menú móvil existente y su contraste.
- Reducir decoración en pantallas pequeñas, sin ocultar contenido.
- Verificar texto, botones, foco visible y controles del modal en fondos oscuros.
- Respetar la preferencia de movimiento reducido existente.

## 7. Aplicación
Las páginas usan la clase `theme-halloween` en `<body>`. La estructura y los componentes siguen la guía base; esta guía solo define la capa seasonal. Para regresar a una experiencia neutral, retirar la clase y restaurar los tokens base.
