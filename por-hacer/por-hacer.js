const fs = require('fs');
require('colors');

let listadoporhacer = []

const guardaDB = () => {

    let data = JSON.stringify(listadoporhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

const cargarDB = () => {

    try {

        listadoporhacer = require('../db/data.json');

    } catch (error) {
        listadoporhacer = [];
    }
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porHacer);
    guardaDB();

    return porHacer;
};

const getListado = () => {

    cargarDB();
    return listadoporhacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoporhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoporhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoporhacer.splice(index, 1);
        guardaDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}