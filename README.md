# Prueba Técnica Mango

Este repositorio contiene la solución a una prueba técnica realizada como parte del proceso de selección de Mango.

## Descripción del Proyecto

El proyecto consiste en desarrollar un custom slider con Next js. 

## Tecnologías Utilizadas

- Next js 13
- Typescript
- React
- CSS

## Instrucciones de Uso

1. Clona el repositorio.
2. Escribe en la terminal npm i para instalar las dependencias necesarias
3. Levanta el mock server con npm run mock:server
4. Levanta el cliente con npm run dev
5. Lanza los test con npm run test
6. Ve al navegador y dirígete a http://localhost:3000/

7. La prueba se encuentra desplegada en Vercel (https://prueba-mango-next.vercel.app/).


## Herramientas utilizadas

1. Next js CLI
2. Uso de estilos: Se ha utilizado CSS para montar unos estilos básicos. 
3. Uso de Typescript: Se ha usado typescript ya que es una herramienta fundamental en cualquier aplicación actual de react.
4. Uso de Librerias Externas: Json Server para montar un server mock y así poder inicializar el slider con los valores de una fake API.

## Estructura Next js 13

La prueba se ha realizado utilizando Next js 13, esto habilita el uso del router app así como de los server / client components.

De este modo, las páginas exercise 1 y exercise 2 son server components. Estos componentes son asíncronos y se encargan del fetcheo de los datos iniciales del slider.

A su vez, estas páginas renderizan el componente Slider. Este componente obligatoriamente hace uso de la directiva use client porque necesita de funcionalidades de React que únicamente se encuentran en el lado del cliente, como por ejemplo los hooks (useState, useEffect, useRef...) necesarios para el correcto funcionamiento del slider.

## Objetivos

Mi foco en la realización de esta prueba ha sido centrarme en el clean code y en la separación de responsabilidades. 
He procurado darle a la aplicación una distribución de carpetas y archivos que sigan las buenas prácticas de desarrollo.

En lo relativo al componente Slider que es la base de esta prueba técnica, he procurado separar las capa de la lógica y la capa presentacional
con el objetivo de facilitar su legibilidad. He procurado cumplir todos los requerimientos que aparecían en los requisitos de la prueba así 
como facilitado una serie de tests utilizando jest y react testing library.

## Problemas

Uno de los retos que he encontrado
ha sido la gestión de eventos del raton para controlar el slider así como los eventos "touch" de dispositivos táctiles.

También a la hora de realizar algunos test unitarios en el componente slider he encontrado problemas a la hora de simular con precisión
los eventos de drag. De hecho uno de los test (el número 4) falla por esto mismo.

## Mejoras

De contar con mayor tiempo, habría hecho hincapié en:

- Aumentar el número de test unitarios. Además creo que añadir en este componente pruebas funcionales con Cypress sería conveniente dada la dificultad de gestionar eventos tan precisos como el drag del slider.
- Integrar algún servicio de mock api que no funcione únicamente en local
- Dedicar mayor tiempo a los estilos, aplicar BEM con SAAS o usar una estrategia de css modules u otro sistema de organización de estilos. 

## Conclusiones

He disfrutado realizando la prueba técnica ya que he aprendido mucho a la hora de montar un componente tan complejo como es un slider desde cero. He necesitado investigar y comprender mejor diferentes eventos
así como a realizar los cáculos necesarios para el reposicionamiento de los thumbs. 

Además, el uso de Next js 13 te habilita para usar las novedades que incluye React en su última versión y que claramente van a marcar las guías de cómo organizar aplicaciones web basadas en React a partir de ahora.

Sin duda ha sido una experiencia enriquecedora y me gustaría poder debatir más en detalle todo el desarrollo planteado.

Muchísimas gracias por vuestro tiempo.
