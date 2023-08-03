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
                carrito: resolve('pages/carrito.html'),
                categorias: resolve('pages/categorias.html'),
                nosotros: resolve('pages/nosotros.html'),
                contacto: resolve('pages/contacto.html'),
                index: resolve('index.html')
            }
        }
    }
}