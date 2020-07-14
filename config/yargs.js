const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const opts1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const opts2 = {
    completado: {
        alias: 'c',
        default: false,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts1)
    .command('borrar', 'Eliminar una tarea por hacer', opts)
    .command('listar', 'Listar elementos por hacer', opts2)
    .help()
    .argv;

module.exports = {
    argv
}