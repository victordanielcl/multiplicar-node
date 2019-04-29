const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./Config/yargs').argv;
const colors = require('colors');
const command = argv._[0];

console.log(argv);
console.log(command);

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(archivo => {
            console.log(archivo);
        }).catch(err => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log("Archivo creado: " + archivo);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log("Comando no reconocido");
        break;
}

//let argv2 = process.argv;
/*let param = argv[2]
let base = param.split('=')[1]
console.log(base);
crearArchivo(base).then(archivo => {
    console.log("Archivo creado: " + archivo);
}).catch(err => {
    console.log(err);
});*/