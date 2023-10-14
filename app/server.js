import express from "express";
import ProductRoute from '../routes/routes.js'
import ApiProductRoute from '../api/routes/routes.js'

const app = express();

app.use(express.urlencoded({ extended: true })); //middleware para analizar datos pasados por la url
app.use("/", express.static("public")); //middleware para establecer archivos estaticos (ej que se apliquen los styles en todas las vistas sin importar la ruta)
app.use(express.json());    //middleware para poder analizar solicitudes en formato JSON 
app.use(ProductRoute)
app.use('/api',ApiProductRoute)

// Pasa el puerto del servidor
app.listen(3333);