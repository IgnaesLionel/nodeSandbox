//classe constructeur

let Newhero = function(name, type) {
  this.name = name;
  this.type = type;
  this.say = function () {
    console.log (`Mon nom est ${name} je suis un ${type}`)
  };
};

module.exports = Newhero
