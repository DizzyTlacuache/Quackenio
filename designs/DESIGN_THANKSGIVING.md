# Quackenio Thanksgiving Design Guide

## 1. Objetivo
Crear una temporada de Acción de Gracias cálida y acogedora: café de otoño, mesa compartida y gratitud hacia la comunidad Quackenio.

## 2. Dirección visual
- Nogal y café tostado como marco oscuro para el contenido.
- Dorado cosecha para luz, orientación y acciones.
- Calabaza y arándano (rojo ladrillo) como acentos secundarios.
- Crema cálido para texto; mantener la fotografía de cafetería y productos como protagonista.
- Referencias sutiles a hojas de otoño y cosecha; evitar clichés saturados.

## 3. Tokens de tema
Los tokens se definen en `.theme-thanksgiving` dentro de [styles.css](../styles.css):

| Token | Valor | Uso |
| --- | --- | --- |
| `--black` | `#1f140c` | Fondo |
| `--dark` | `#2f1d10` | Secciones y controles |
| `--dark-card` | `#43291a` | Tarjetas |
| `--yellow` | `#e8a43a` | Dorado cosecha, acción y estados |
| `--orange` | `#d2692a` | Calabaza |
| `--accent-2` | `#b5452e` | Arándano |
| `--white` | `#fff3df` | Texto principal |
| `--gray` | `#d9c4a4` | Texto secundario |

Display usa Playfair Display con fallback a Bebas Neue; el cuerpo usa Lora con fallback a Inter.

## 4. Componentes
- **Fondo:** gradientes marrón cálido con resplandor dorado.
- **Navegación:** marrón oscuro, filete dorado y estados activos visibles.
- **Hero:** ilustración `images/background_thanksgiving.jpg`, overlay oscuro y borde inferior geométrico.
- **Botones:** primario dorado de alto contraste; secundario oscuro con contorno claro.
- **Cards y formularios:** superficies marrón por capas, bordes cálidos y foco visible.
- **Noticias:** conservar las imágenes originales sin recorte.

## 5. Voz y contenido
- Español cercano, guiños de pato y tono de gratitud.
- No cambiar contenido funcional (precios, horarios, rutas, contacto).

## 6. Responsive y accesibilidad
- Conservar el menú móvil y contraste; foco visible en fondos oscuros.
- Respetar la preferencia de movimiento reducido existente.

## 7. Aplicación
Las páginas usan la clase `theme-thanksgiving` en `<body>`. Para volver a una experiencia neutral, retirar la clase.
