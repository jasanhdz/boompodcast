## Style JSX

Lo que hacemos es separar los estilos por cada componente. Style Jsx funciona de la siguiente manera:

``

<style jsx>{`
    /* CSS */
  .clase {color: red}
`}</style>

``

### Reglas de StyleJSX

Se aplica por componente Tampoco se aplica a componentes internos o externos

¿Como romper las reglas?

``

<style jsx global>{`
    /* CSS */
  body {
    background: yellow;
  }
`}</style>

``

Para escaparnos parcialmente de JSX, para hacer una hoja de estilos global

```jsx
<div className="main">
  <Navegacion />
</div>

// Qué es <navegacion>?
<div><a>Home</a></div>

<style jsx>{`
  .main:global(a) {color: red}
  :global(p) {
    color:green
  }
`}</style>
```

Ejemplo de una Página en nextJS

```jsx
import react from "react";

const about = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        img {
          max-width: 30%;
          color: white;
        }
        h2 {
          color: white;
        }
        .container p {
          color: gray;
        }
      `}</style>
      <img src="../static/platzi-logo.png" alt="YOLO" />
      <h2>Creado por YO</h2>
      <p>Curso de Next.Js en platzi</p>
      <style jsx global>{`
        body {
          background: #1c3643;
        }
      `}</style>
    </div>
  );
};

export default about;
```
