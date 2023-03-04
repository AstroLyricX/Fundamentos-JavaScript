// ! Selectores del DOM

const heading = document.querySelector('.heading');

console.log(heading);
console.log(heading.textContent);
console.log(heading.tagName);
console.log(heading.className);
console.log(heading.id);

const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach( enlace => console.log(enlace.textContent))