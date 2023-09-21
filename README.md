# Funciones debounce, throttle y memoize

Pequeño proyecto para mostrar de forma interactiva las funciones `debounce`, `throttle` y `memoize`.
También se puede probar las funciones mediante CLI.

## Prerrequisitos

Asegúrate de tener Node.js y npm instalados en tu sistema.

## Instrucciones de uso

1. Clona este repositorio en tu equipo:

```
https://github.com/cpcastells/sprint2-functions-node.git
```

2. Instala las dependencias

```
npm install
```

3.  Utiliza el siguiente comando para compilar:

```
npm run build
```

4. Para probar las funciones mediante CLI utiliza:

```
node dist/cli/cli.js
```

5. Aparecerá un menú con las opciones disponibles. Puedes seleccionar una opción ingresando su comando correspondiente:

- `1. Debounce`: Te pedirá añadir delay y mensaje. Te devolverá el mensaje en base al delay.
- `2. Throttle`: Te pedirá añadir delay y mensaje. Te devolverá el mensaje en base al delay.
- `3. Memoize`: Te pedirá añadir número de veces a realizar la función. En este caso verás los milisegundos que tarda en realizarse una determinada función (ya predeterminada en este caso), de manera que se puede observar la diferencia de tiempos una vez memoizada la función.

6. Para interaccionar a nivel de front, levanta un servidor con el comando:

```
npm start
```

7. En la página verás distintas opciones para ver el funcionamiento de cada una de las funciones `debounce`, `throttle` y `memoize`.

## Desarrollo y Pruebas

Este proyecto utiliza Jest para testing unitario.

- `npm test`: Ejecuta las pruebas utilizando Jest.

---

Este proyecto fue desarrollado como parte del Sprint 2 en IT Academy.
