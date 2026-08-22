# TASK — CONTENT + IMAGES UPDATE

## Objetivo

Actualizar únicamente los textos e imágenes de la Timeline/Moments y eliminar los letreros visuales de "Issue".

NO modificar diseño, estructura, lógica, motion, Proximity ni arquitectura.

---

# 1. IMÁGENES

La imagen actual del Hero ya está disponible en:

`public/images/hero/`

Usar la imagen existente de esa carpeta para el Hero.

NO crear, generar ni descargar una nueva imagen para el Hero.

Las imágenes de los capítulos están disponibles en:

`public/images/memories/`

La Timeline ya tiene placeholders preparados para mostrar las imágenes.

Asignar las imágenes existentes a esos placeholders según esta especificación:

### Capítulo 1
Imagen:

`public/images/memories/7.jpeg`

### Capítulo 2
Imagen:

`public/images/memories/8.jpeg`

### Capítulo 3
Mantener la imagen que actualmente tenga asignada.

NO reemplazarla.

### Capítulo intermedio
Imagen:

`public/images/memories/11.jpeg`

### Capítulo 4
Imagen:

`public/images/memories/3.jpeg`

### Capítulo 5
Imagen:

`public/images/memories/16.jpeg`

IMPORTANTE:

- Las imágenes ya existen.
- NO crear imágenes nuevas.
- NO modificar las imágenes.
- NO mover las imágenes de sus carpetas.
- Utilizar las rutas existentes.
- Colocarlas en los placeholders de imagen que ya existen en la Timeline.
- Si el data layer contiene la ruta de imagen, modificarla allí en lugar de hardcodearla dentro del componente.

---

# 2. ELIMINAR ISSUE LABELS

Eliminar de la UI todos los letreros/badges visuales que muestran:

- `Issue`
- `Issue #01`
- `Issue #02`
- `Issue #03`
- `Issue #04`
- `Issue #05`

No reemplazarlos por otro badge.

Eliminar únicamente los indicadores visuales de Issue.

---

# 3. ACTUALIZAR TIMELINE

La Timeline debe terminar con **6 capítulos en total**.

Orden obligatorio:

1. Capítulo 1
2. Capítulo 2
3. Capítulo 3
4. Capítulo intermedio
5. Capítulo 4
6. Capítulo 5

---

## Capítulo 1

### Título

CONSERVAR el título actual exactamente como está.

### Texto

" Ese momento en el que Dios decidió cruzar nuestras vidas y nada volvió a ser igual."

Eliminar el espacio inicial si existe al guardar el contenido.

### Imagen

`public/images/memories/7.jpeg`

---

## Capítulo 2

### Título

"Nuestra declaración de amor"

### Texto

"Mucha timidez. Grandes sentimientos por aquí y por allá, pero declaración de un amor genuino."

### Imagen

`public/images/memories/8.jpeg`

---

## Capítulo 3

### Título

"Bellos momentos"

### Texto

"Las salidas a comer, cine, consejos, apoyo e intimidad en cada una de nuestras etapas. Han sido los más bellos momentos, nuestra compañía."

### Imagen

CONSERVAR la imagen actualmente asignada.

NO reemplazarla.

---

## Capítulo intermedio

Insertar un nuevo capítulo ENTRE Capítulo 3 y Capítulo 4.

### Título

"mas bellos momentos"

### Texto

NO agregar texto.

Debe mostrar únicamente el título y la imagen.

### Imagen

`public/images/memories/11.jpeg`

---

## Capítulo 4

### Título

"Momentos difíciles"

### Texto

"Solo los dos sabemos lo complicado que ha sido algunos momentos pero Dios y amor ha Sido nuestro estandarte en los días grises. Aprendimos que amarse también es quedarse cuando el cielo se pone gris."

### Imagen

`public/images/memories/3.jpeg`

IMPORTANTE:

Este es el Capítulo 4 original, ahora desplazado después del nuevo capítulo intermedio.

---

## Capítulo 5

### Título

"Hoy"

### Texto

"Son apenas 3 meses pero contigo el tiempo es como de toda la vida. Seguiré eligiendo está historia."

### Imagen

`public/images/memories/16.jpeg`

IMPORTANTE:

Conservar exactamente el texto proporcionado. No corregir gramática, ortografía ni estilo.

---

# 4. RESTRICCIONES

NO modificar:

- `references/lovable/`
- estilos;
- colores;
- tipografías;
- animaciones;
- estructura visual;
- Proximity;
- Supabase;
- hooks;
- arquitectura;
- tests existentes.

NO crear imágenes.

NO descargar imágenes.

NO generar imágenes.

NO reemplazar imágenes existentes salvo las asignaciones indicadas.

Preferir modificar los datos en `src/data/` si los textos e imágenes están definidos allí.

No duplicar contenido directamente en componentes si actualmente existe un data layer.

---

# 5. VALIDACIÓN

Ejecutar:

```bash
npm test
npm run build
npx tsc --noEmit

Verificar:

existen exactamente 6 capítulos;
están en el orden solicitado;
Capítulo 1 conserva su título;
Capítulo intermedio solo tiene título + imagen;
las imágenes corresponden exactamente a las rutas indicadas;
Capítulo 3 conserva su imagen actual;
los Issue labels desaparecieron;
Hero utiliza la imagen existente de public/images/hero/;
references/lovable/ no fue modificado;
Proximity no fue modificado;
todos los tests pasan;
build correcto;
TypeScript correcto.
REPORTE FINAL

Responder únicamente:

Cambios realizados

Archivos modificados.

Timeline

Confirmar:

6 capítulos implementados en el orden solicitado.

Imágenes

Confirmar las rutas utilizadas para cada capítulo.

Issue labels

Confirmar eliminación.

Hero

Confirmar que se utilizó la imagen existente de:

public/images/hero/

Validación
Tests:
Build:
TypeScript:
Estado

CONTENT + IMAGES UPDATE — COMPLETE

NO implementar ninguna tarea adicional.