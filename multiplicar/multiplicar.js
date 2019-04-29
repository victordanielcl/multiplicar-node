//Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla2 = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limit)) {
            reject(`${base} y ${limit} no son numeros`);
            return;
        } else {
            fs.readFile(`Tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let imprimir = data.split("\n").filter((value, index, array) => {
                        return index < limit
                    });
                    resolve(imprimir);
                }
            });
        }
    });
}

let listarTabla = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        let mensaje = "";
        for (let i = 0; i < limit; i++) {
            mensaje += (i + " x " + base + " = " + (base * i)) + "\n";
        }

        if (!Number(base) && !Number(limit)) {
            reject(`${base} y ${limit} no son numeros`);
            return;
        } else {
            resolve(mensaje.green);
        }
    });
}

let imprimitLista = (base) => {
    return new Promise((reject, resolve) => {
        fs.readFile(`Tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


let crearArchivo = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es numero');
            return;
        }

        let res = '';

        for (let i = 1; i <= limit; i++) {
            res += (i + " x " + base + " = " + i * base + "\n");
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, res, (err) => {
            if (err) reject(err)
            else {
                resolve(`${colors.bgMagenta("tabla-base")}.${colors.green("txt")}`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}