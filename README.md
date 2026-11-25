# Portafolio · Alejandro Cañas Arango

Sitio estático (HTML, CSS y JS a mano, sin build ni dependencias) pensado para GitHub Pages.
Bilingüe ES/EN, tema claro y oscuro.

```
index.html        estructura y metadatos
styles.css        todo el diseño (tokens → base → componentes)
scripts/data.js   TODO el contenido: textos, proyectos, experiencia, stack
scripts/app.js    pinta data.js, cambia idioma/tema, filtra proyectos
assets/           favicon y og.png (imagen al compartir el enlace)
```

## Editar contenido

Casi todo cambio es en `scripts/data.js`. Cada texto es un string (igual en ambos idiomas)
o `{ es, en }`. Un proyecto con `featured: true` sale como caso a fondo; el resto va a la grilla.

Regla de la casa: solo cifras verificables en el repo, el changelog o un reporte. Nada de
números de negocio del empleador, nombres de clientes ni de aliados.

## Verlo en local

```bash
python -m http.server 4173
# http://127.0.0.1:4173
```

## Publicar en GitHub Pages

Repo `alejoc0314.github.io` → queda en `https://alejoc0314.github.io/` sin configurar nada más.
Si se usa otro nombre de repo, activar Pages (Settings → Pages → rama `main`, carpeta `/`) y
actualizar `og:url`, `og:image` y `canonical` en `index.html`.
