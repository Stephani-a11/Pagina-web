<template>
  <SeccionBase id="objetos" titulo="10. Objetos, propiedades y métodos">
    <p>Los objetos son estructuras de datos que contienen propiedades (datos) y métodos (funciones).</p>
    
    <h3>Creación de objetos:</h3>
    <ul>
      <li><strong>Literal de objeto:</strong> <code>{ propiedad: valor, ... }</code></li>
      <li><strong>Constructor Object:</strong> <code>new Object()</code></li>
      <li><strong>Constructor personalizado:</strong> <code>function Constructor() { ... }</code></li>
      <li><strong>Clases (ES6):</strong> <code>class Nombre { ... }</code></li>
    </ul>
    
    <h3>Acceso a propiedades:</h3>
    <ul>
      <li><strong>Notación de punto:</strong> <code>objeto.propiedad</code></li>
      <li><strong>Notación de corchetes:</strong> <code>objeto["propiedad"]</code></li>
    </ul>
    
    <EjemploBase 
      titulo="Ejemplo: Objetos"
      :codigo="codigoEjemplo"
      @ejecutar="mostrarObjetos"
    />
  </SeccionBase>
</template>

<script setup>
import { ref } from 'vue'
import SeccionBase from '../SeccionBase.vue'
import EjemploBase from '../EjemploBase.vue'

const codigoEjemplo = `// Creación de objeto con literal
let persona = {
    nombre: "María",
    edad: 30,
    profesion: "Desarrolladora",
    
    // Método del objeto
    presentarse: function() {
        return \`Hola, soy \${this.nombre}, tengo \${this.edad} años y soy \${this.profesion}.\`;
    },
    
    // Método con función flecha (no recomendado por el uso de 'this')
    cumplirAnios: function() {
        this.edad++;
        return \`¡Feliz cumpleaños! Ahora tengo \${this.edad} años.\`;
    }
};

// Acceso a propiedades
let nombrePersona = persona.nombre;        // "María"
let edadPersona = persona["edad"];         // 30

// Llamada a métodos
let presentacion = persona.presentarse();
let nuevoAnio = persona.cumplirAnios();`

const mostrarObjetos = () => {
  let persona = {
    nombre: "María",
    edad: 30,
    profesion: "Desarrolladora",
    
    presentarse: function() {
      return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`
    },
    
    cumplirAnios: function() {
      this.edad++
      return `¡Feliz cumpleaños! Ahora tengo ${this.edad} años.`
    }
  }
  
  let nombrePersona = persona.nombre
  let edadPersona = persona["edad"]
  
  let presentacion = persona.presentarse()
  let nuevoAnio = persona.cumplirAnios()
  
  return `
    <p><strong>Acceso a propiedades:</strong></p>
    <ul>
      <li>persona.nombre = "${nombrePersona}"</li>
      <li>persona["edad"] = ${edadPersona}</li>
    </ul>
    <p><strong>Llamada a métodos:</strong></p>
    <ul>
      <li>persona.presentarse() = "${presentacion}"</li>
      <li>persona.cumplirAnios() = "${nuevoAnio}"</li>
    </ul>
    <p><strong>Estado actual del objeto:</strong></p>
    <pre>${JSON.stringify(persona, null, 2)}</pre>
  `
}
</script>