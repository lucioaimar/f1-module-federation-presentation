---
marp: true
theme: gaia
title: Module federation - Gamechanger para microfrontends
---

<style>
section {
  background: #808080;
  color: white;
}
</style>

# Module Federation con Angular - Game changer para microfrontends

![bg right width:200px](./images/module_federation.png)
![bg right width:200px](https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png)

---

# ¿Que es un microfrontend?

Podemos describir a un microfrontend como "Micro-servicios para el frontend"

Posee 2 caráctericticas principales:

- Es "self-contained" (O contenido en si mismo)
- Puede ser desplegado de manera independiente

---

![bg](./images/y_tho.jpeg)

---

- Monolitos gigantes: Con el tiempo las aplicaciones monolíticas se vuelven dificiles de manejar.
- Equipos autárquicos: El equipo puede fragmentarse en equipos pequeños que se encarguen de mantener ciertas partes de la aplicación y tome decisiones por su cuenta.
- Mejoras en la performance de la aplicación (Si se hace correctamente).

- Customización y A/B Testing

---


# Técnicas de despliegue

- Despliegue en build time: La aplicación se despliega como una aplicación completa que conoce todas sus dependencias a la hora de compilarse. Esta debe ser redeployada de forma completa cada vez que se haga un cambio.

- Despliegue en run time: Los diferentes MFEs que conforman la aplicación pueden desplegarse de forma independiente. Los demás componentes no necesitan ser redeployados.

Como vamos a hablar de Module Federation vamos a prestarle atención a la segunda.

Cuando hablamos de microfrontend generalmente nos referimos a la segunda.

Acá podria mencionar las diferentes formas

Iframes

Metaframeworks (single spa)

URL

---

# Problemas con implementaciones en runtime

Compartir código en runtime es difícil, además los bundlers asumen que el código completo de aplicación está disponible a la hora de compilar.

Una interfaz como está seria la deseada en microfrontends:

```
import('http://other-microfrontend');
```

---

# Module Federation al rescate

Es una herramienta que viene built in en Webpack 5 con la principal ventaja de que nos permite compartir código en tiempo de ejecución facilmente.



---

# Ventajas de Module Federation

- El código permanece igual
- No hay un framework
- No se utiliza un code loader como SystemJS
- Se puede utilizar con cualquier tipo de código JavaScript
- Es Universal

---

# Arquitectura de una app que utiliza module federation

Se conforma por 2 tipos de apps:
- Host (o shell)
- Remote

![width: 400px](./images/host_remote_dependency.png)

---

# Cosas a tener en cuenta

- Es probable que necesites tener un cierto nivel de expertise para usar module federation
