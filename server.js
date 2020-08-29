// console.log (__dirname) //path
// console.log (__filename) //path et nom du fichier.js
// console.log (__filename.replace(__dirname + "\\", '').replace('.js','')); // retire le path et le .js

let Newheroe = module.require('./newheroe.js')

let h1 = new Newheroe ("Baymax", "synthézoïde")//construction du premier Hero
let h2 = new Newheroe ("Hiro", "humain") //construction du deuxieme Hero
h1.say()
h2.say()

console.log (process.argv) //montre ce qui est en fonctionnement avec les arguments
// -> node server.js --nom baymax <- clef + data

function collect(argument){
  let key = process.argv.indexOf(argument);

  return key ===-1 ? null : process.argv[key+1]
}
console.log (collect ("--nom")) //baymax

let questions = ["Comment t'appelles-tu?", "Que fais-tu dans la vie ?", "Quel est ton langage de programmation préferé?"]

function ask(index){
  process.stdout.write(`${questions[index]}`)
}

ask(0)
ask(1)
ask(2)
