import express from "express";
import * as controllers from '../controllers/controllers.js'

const route = express.Router()

//Cuando se da un click en los distintos botones o links se elige una ruta la cual envia informacion a la funcion de un controlador
route.get("/products", controllers.getProducts);

route.get('/:category', controllers.getProductsByCategory);//Sin importar la seccion que se clickee redirige en base a la category por el param de la url

route.get("/products/new", controllers.createProductFormPage);
route.post("/products/new", controllers.createProduct);

route.get( "/products/edit/:product_id", controllers.editProductFrom );
route.post( "/products/edit/:product_id", controllers.editProduct );

route.get("/products/delete/:product_id", controllers.deleteProductFrom);
route.post("/products/delete/:product_id", controllers.deleteProduct);

route.get("/products/:product_id", controllers.getProductbyId);

export default route