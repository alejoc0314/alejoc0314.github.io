# Portafolio · Alejandro Cañas Arango

Sitio estático (HTML, CSS y JS a mano, sin build) publicado en GitHub Pages:
<https://alejoc0314.github.io/>. Bilingüe ES/EN.

```
index.html          portada: hero, presentación, tres proyectos, sobre mí y cierre
trabajo.html        el resto: más proyectos, trabajos anteriores y repos de GitHub
contacto.html       formulario de contacto (se envía con Web3Forms y llega por correo)
404.html            página para rutas que no existen (independiente: estilos propios, rutas absolutas)
styles.css          todo el diseño (tokens → base → componentes → una sección por página)
scripts/data.js     TODO el contenido: textos, proyectos, experiencia, repos
scripts/app.js      pinta data.js, idioma, telón, scroll con inercia, menú, formulario
scripts/vendor/     lenis.min.js (scroll con inercia, licencia MIT)
assets/             fotos, capturas, fuente (Inter Tight, licencia OFL), favicon y og.jpg
robots.txt, sitemap.xml
design/             material de trabajo; no se publica (está en .gitignore)
```

## Editar contenido

Casi todo cambio es en `scripts/data.js`. Cada texto es un string (igual en ambos idiomas)
o `{ es, en }`. `projects` son los tres de la portada; `more`, `before` y `repos` alimentan
`trabajo.html`; las claves `c.*` son los textos del formulario.

Regla de la casa: solo cifras verificables en el repo, el changelog o un reporte. Nada de
números de negocio del empleador, nombres de clientes ni de aliados. Las capturas de
productos van con datos de ejemplo.

## Al cambiar CSS, JS o datos

Las tres páginas enlazan `styles.css`, `data.js` y `app.js` con una marca de versión
(`?v=AAAAMMDDx`). Hay que subirla en las tres a la vez para que nadie se quede con una
mezcla de archivos viejos y nuevos en la caché del navegador.

## Imágenes

- Fotos y capturas en WebP. Las grandes tienen una versión reducida (`foto-768.webp`,
  `partners-admin-800.webp`) y el navegador elige con `srcset`.
- `umbra-watch.webp` es WebP sin pérdida: para una captura de interfaz pesa menos así.
- `assets/og.jpg` (imagen al compartir el enlace, 1200×630) sale de `design/og.html`:
  se abre a ese tamaño y se captura.

## Formulario de contacto

`contacto.html` envía a Web3Forms con la llave pública que está en el propio formulario
(solo sirve para escribir a ese buzón). El envío lo hace `contactForm()` en `app.js`; si
falla, muestra el correo directo.

## Verlo en local

```bash
python design/tools/serve.py     # http://127.0.0.1:4173/  (servidor sin caché)
# o, sin la carpeta design:  python -m http.server 4173
```

## Publicar

Repo `alejoc0314.github.io`, rama `main`, carpeta raíz: con hacer push queda publicado.
Si se usa otro nombre de repo, actualizar `canonical`, `og:url`, `og:image`, `robots.txt`,
`sitemap.xml` y las rutas absolutas de `404.html`.
