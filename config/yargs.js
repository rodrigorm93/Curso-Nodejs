const opts = {
  base: {
    demand: true, // nos dira que es obligatorio escribir base en la consola
    alias: "b", //ahora podemos escibir -v y ser aigual a base
  },
  limite: {
    alias: "l",
    default: 10, //si la persona no anotara el limite le damos un valor por defecto
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", opts)
  .command("crear", "Genera un archivo con la tabla de multiplicar", opts)

  .help().argv;

module.exports = {
  argv,
};
