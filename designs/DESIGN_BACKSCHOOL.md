# Quackenio Back to School Design Guide

## 1. Objetivo de la faceta back to school
Esta guia documenta la fase visual colegial/academica de Quackenio.
El objetivo es construir una experiencia de campus clasico: intelectual, calida y con aire de tradicion, manteniendo la personalidad playful de la marca.

Principios clave:
- Ambiente academico: biblioteca, madera, escudos, grabados y colecciones.
- Jerarquia editorial: titulos con presencia y bloques tipo cartel institucional.
- Contraste funcional: texto y CTA siempre legibles sobre texturas y fondos ilustrados.

## 2. Direccion visual
La faceta back to school combina una base pergamino con acentos azul marino y dorado:
- Fondos en tonos papel, piedra y madera envejecida.
- Superficies de panel tipo vitrina, menu de campus y placa con marco.
- Acentos dorados para branding y llamadas de accion.
- Azul profundo para encabezados, barra principal y elementos de autoridad visual.

## 3. Design tokens (tema back to school)
Definir en un bloque tematico de [styles.css](../styles.css) con prioridad seasonal.

### 3.1 Colores base
- --black: #241b14
- --dark: #2f2219
- --dark-card: #3a2a1f
- --yellow: #d7a64a
- --yellow-hover: #c29137
- --orange: #a66a2c
- --white: #f4ebd8
- --gray: #9b8f7a
- --navy: #1f3553
- --navy-deep: #14263d

### 3.2 Alias semanticos
- --bg: #e7dbc6
- --bg-section: #d9c7a8
- --bg-alt: #cbb391
- --text: #2c221b
- --text-muted: #5e5244
- --accent: #d7a64a
- --accent-2: #1f3553
- --shadow: rgba(36, 27, 20, 0.30)

### 3.3 Tipografia
- Heading/display: Cinzel (fallback Bebas Neue)
- Body/UI: Lora o Source Sans 3 (fallback Inter)

## 4. Componentes y patrones back to school

### 4.1 Background global
El body usa capas con gradientes sutiles y textura de papel para simular un tablero editorial de campus.
Agregar detalles de arco/piedra en secciones hero y bloques historicos para reforzar narrativa universitaria.

### 4.2 Navbar
- Barra principal con look de madera barnizada y borde dorado fino.
- Links en dorado suave con hover de brillo calido.
- Logo central tipo escudo para composicion institucional.

### 4.3 Hero principal
- Hero tipo poster de facultad: frame de madera + ilustracion central.
- Titulo principal en placa azul marino con marco dorado.
- Subheadline de campana academica (ejemplo: Collegiate Brews and Lore).
- CTA y submodulos secundarios como rutas de exploracion (menu, archivo, coleccion, reserva).

### 4.4 Titulos y divisores
- Titulos de seccion en serif display con contraste alto.
- Palabras acento en dorado/ocre para destacar jerarquia.
- Divisores con trazo doble o filete ornamental.

### 4.5 Botones
- Primario: fondo dorado envejecido, texto oscuro, borde marino.
- Secundario: marino con borde dorado.
- Tercero (quiet action): pergamino con borde oscuro para acciones de baja prioridad.

### 4.6 Cards y superficies
- Cards en estilo placa, marco o ficha de archivo.
- Imagenes miniatura con borde tipo retrato academico.
- Elevacion baja, priorizando look fisico de panel en lugar de efecto flotante fuerte.

## 5. Reglas de implementacion
- Si una regla base y una seasonal afectan el mismo selector, la seasonal back to school es la fuente de verdad.
- Reservar el dorado para marcas de valor: CTA, escudos, divisores y estados activos.
- Evitar saturar con tonos brillantes modernos; mantener paleta sobria y calida.
- Sobre fondos ilustrados, siempre usar overlay para asegurar contraste de texto.

## 6. Responsive
Breakpoints sugeridos:
- 768px: navbar simplificada, hero en columna, modulos secundarios en stack.
- 480px: compactar marcos y reducir decoracion para priorizar lectura.

Notas mobile:
- Mantener titulos legibles sin perder caracter editorial.
- Limitar texturas pesadas que reduzcan rendimiento o claridad visual.

## 7. Accesibilidad
Checklist minimo para esta faceta:
- Validar contraste de dorado sobre marino y dorado sobre pergamino.
- Mantener foco visible en links y botones con outline claro.
- Verificar tamano minimo de touch targets en tarjetas y CTA.
- Evitar que texturas interfieran con lectura en subtitulos pequenos.

## 8. Assets recomendados
- Branding principal: [images/logo.png](../images/logo.png)
- Hero de apoyo: [images/cafeteria.jpeg](../images/cafeteria.jpeg)
- Ambiente de marca: [images/quackenio.jpeg](../images/quackenio.jpeg)
- Cards tematicas: [images/cafe1.png](../images/cafe1.png), [images/cafe2.png](../images/cafe2.png), [images/cafe3.png](../images/cafe3.png)

## 9. QA rapido antes de publicar
- Hero mantiene composicion institucional en desktop y mobile.
- Navbar conserva legibilidad en estados normal, hover y active.
- Titulos, subtitulos y body text se leen con claridad sobre texturas.
- Cards no pierden borde/marco al colapsar layout en breakpoints.
- CTA principal mantiene jerarquia visual sin romper contraste.

## 10. Evolucion futura
Para una siguiente iteracion back to school:
- Crear subvariantes por temporada academica (welcome week, midterms, graduation).
- Extraer tokens a un bloque dedicado para alternar tema por clase CSS.
- Definir set de iconografia institucional (escudo, pluma, libro, sello) reutilizable.
