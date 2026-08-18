# Hello Web

## Objetivos

- Repasar conceptos básicos de desarrollo web. 
- Introducir conceptos básicos de programación con IA.

> Importante: Para realizar este práctico es necesario que tengas instalado
> un IDE (Por ejemplo Visual Studio Code), git y Node.js.

## Parte 1: Desarrollo Web

### 1.1 Set up inicial

1. Clona el repositorio desde la página de GitHub.
Pista: Puedes usar los comandos desde una terminal:
```bash
git clone https://github.com/IngSoft-FIS-Ejercicios/hello-ia.git
cd hello-ia
code .
```

2. Inicializa la aplicación:
```bash
npm install
npm run dev
```

### Ejecutar el proyecto

6. Activa las DevTools (`Ctrl + Shift + I` (o `F12` en Windows y Linux; `Cmd + Option + I` en Mac).).
8. Utilizando las DevTools, selecciona la opción para visualizar la web como se visualizaría desde un dispositivo móvil.

### 1.2 Conociendo el proyecto

3. Antes de realizar cambios, responde las siguientes preguntas:
* ¿Qué lenguajes de programación se utilizan? ¿Cuál es la finalidad de uso de cada lenguaje?
* ¿Cuál es la estructura de archivos y directorios de este proyecto?
* ¿Cómo el sistema persiste la información? ¿Donde se almacenan las canciones? 
* ¿Qué campos son obligatorios? ¿Cómo se define y se muestra el mensaje de error? 

### 1.3 Modificando el proyecto

4. Modifica el método toString de la clase Song para que, en el caso de no tener artista, que no se mencione ese dato (Ejemplo de salida de canción sin artista: `Canción: Bohemian Rhapsody`).

5. Agrega el campo Año al formulario únicamente desde la interfaz de usuario. No es necesario que sea un campo obligatorio.

### 1.4 DevTools

7. Agrega algún log mediante el método `console.log()` en el setter de título en la clase Song.  ¿Cómo puedo revisar ese log y que utilidad puede tener?

### Parte 2: Intro a IA.

9. Utiliza GitHub Copilot en modo agente para generar una funcionalidad que permita marcar una canción de la lista como favorita. Vuelve a ejecutar la aplicación una vez terminado el trabajo de la IA. Evalúa los resultados (tanto el comportamiento de la funcionalidad como el código generado).


Links a buenas practicas de ia, pasos para inicializar/instalar copilot. más paso a paso de la tarea de desarrollo en la parte de IA
