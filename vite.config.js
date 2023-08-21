import { resolve } from "node:path"

console.log (resolve("pages"))

export default {
    server: {
        port: "2222",
    },
    css: {
        devSourcemap: true,
    },
    build: {
        emptyOutDir: true,
        rolluOptions: {
            input: {
                accesorios: resolve('pages/accesorios.html'),
                contectividad: resolve('pages/conectividad.html'),
                consolas: resolve('pages/consolas.html'),
                notebooks: resolve('pages/notebooks.html'),
                perifericos: resolve('pages/consolas.html'),
                carrito: resolve('pages/perifericos.html'),
                software: resolve('pages/software.html'),
                categorias: resolve('pages/todo.html'),
                nosotros: resolve('pages/nosotros.html'),
                contacto: resolve('pages/contacto.html'),
                index: resolve('index.html')
            }
        }
    }
}