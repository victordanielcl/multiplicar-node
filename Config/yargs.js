const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 5
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multiplicar', opt)
    .command('crear', 'Creo', opt)
    .help()
    .argv;

module.exports = {
    argv
}