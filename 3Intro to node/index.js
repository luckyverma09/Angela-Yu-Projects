const supervillains = require('supervillains');
const superheroes = require('superheroes'); 

let heroName = superheroes.random();
let villainName = supervillains.random();

console.log("Hero name : " + heroName);
console.log("Villain name " + villainName);