import { Router } from 'express'
import * as controllers from '../controllers/controller.js'

const route = Router()

//Cuando se da un click en los distintos botones o links se elige una ruta la cual envia informacion a la funcion de un controlador
//La diferencia con las rutas de la app, es que estas es cuando haces una consulta por crud con la base de datos
route.get('/products', controllers.getProducts)
route.get('/products/:id', controllers.getProductById)
route.post('/products', controllers.addProduct)
route.patch('/products/:id', controllers.updateProduct)
route.put('/products/:id', controllers.replaceProduct)
route.delete("/products/:id", controllers.deleteProduct)

export default route