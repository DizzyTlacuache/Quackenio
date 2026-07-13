# Quackenio Guide Selection

## Objetivo
Este documento explica cuando y como usar cada guia de diseno disponible en el proyecto.

Guias actuales:
- DESIGN.md
- DESIGN_TROPICAL.md

## Cuando usar cada guia

### Usar DESIGN.md (guia base)
Usar esta guia cuando:
- Se trabaje en una version neutral o clasica de la marca.
- Se implementen componentes que no dependan de temporada.
- Se necesite una base estable para nuevas paginas antes de aplicar skin tematica.
- Se quiera priorizar estilo oscuro original y sistema historico.

### Usar DESIGN_TROPICAL.md (guia seasonal)
Usar esta guia cuando:
- La experiencia activa sea tropical, veraniega o vacacional.
- Se hagan cambios visuales en home, hero, CTA o cards con lenguaje de playa.
- Se actualicen tokens del bloque seasonal en styles.css.
- Se preparen campañas o contenidos con mood tropical.

## Regla de prioridad entre guias
Cuando ambas guias describan el mismo componente:
1. Si la temporada tropical esta activa, manda DESIGN_TROPICAL.md.
2. Si no hay temporada activa, manda DESIGN.md.
3. Si hay duda, conservar estructura de DESIGN.md y aplicar solo capa visual de DESIGN_TROPICAL.md.

## Como aplicarlas en flujo de trabajo

### Flujo recomendado para cambios visuales
1. Identificar si el cambio es base o seasonal.
2. Leer la guia correspondiente antes de editar CSS/HTML.
3. Revisar tokens, tipografia y patrones de componente en esa guia.
4. Implementar en styles.css sin romper responsive.
5. Validar contraste, hover/focus y consistencia de marca.
6. Documentar en PR que guia se uso.

### Flujo recomendado para nuevos componentes
1. Definir el componente en lenguaje base con DESIGN.md.
2. Si aplica temporada, crear variante tropical segun DESIGN_TROPICAL.md.
3. Evitar duplicar componentes; preferir variantes por tema.

## Casos comunes

### Caso A: Nuevo boton en Home
- Tropical activa: usar colores, forma pill y contraste de DESIGN_TROPICAL.md.
- Tropical inactiva: usar variantes y comportamiento definidos en DESIGN.md.

### Caso B: Nueva seccion en pagina About
- Estructura narrativa y jerarquia: seguir DESIGN.md.
- Si el sitio esta en modo tropical: aplicar paleta, fondos y acabados de DESIGN_TROPICAL.md.

### Caso C: Ajuste de navbar
- Base de navegacion y accesibilidad: DESIGN.md.
- Apariencia estacional (colores, fondo, acentos): DESIGN_TROPICAL.md.

## Mantenimiento de documentacion
- Si cambia el look base, actualizar primero DESIGN.md.
- Si cambia la temporada tropical, actualizar DESIGN_TROPICAL.md.
- Si cambia la regla de decision entre guias, actualizar este archivo.

## Convenciones para el equipo
- No mezclar tokens de ambas guias sin criterio de temporada.
- Evitar sobreescrituras contradictorias en styles.css.
- Si un cambio rompe coherencia, registrar decision en PR y ajustar la guia correcta.

## Checklist rapido antes de merge
- Se eligio la guia correcta para el cambio.
- Los tokens usados coinciden con la guia elegida.
- El componente funciona en desktop y mobile.
- Estados hover/focus conservan legibilidad.
- La decision de guia quedo indicada en la descripcion del cambio.
