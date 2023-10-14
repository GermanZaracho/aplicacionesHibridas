import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://project:486njikl@project.gobfbbu.mongodb.net")
const db = client.db("AH20232CP1");

// Los servicios reciben las indicaciones de los controladores y hacen la magia y devuelven la informacion pertinente
async function getProducts(filter = {}) {

    const mongoFilter = { deleted: { $ne: true } }

    if (filter.min && filter.max) {
        mongoFilter.price = { $gte: parseInt(filter.min), $lte: parseInt(filter.max) }
    } else {
        if (filter.min) {
            mongoFilter.price = { $gte: parseInt(filter.min) };
        }

        if (filter.max) {
            mongoFilter.price = { $lte: parseInt(filter.max) };
        }
    }

    if (filter.description) {
        mongoFilter.$text = { $search: filter.description }
    }
    // Encuentra la informacion dentro de la coleccion de la base de datos de mongoDB y la convierte en un array y la devuelve
    return db.collection("peripherals").find(mongoFilter).toArray();

}

// Hace lo mismo que arriba pero para un solo producto en base al ID
async function getProductbyId(id) {
    return db.collection("peripherals").findOne({ _id: new ObjectId(id) });
}

// Este recibe la category en base a un param que se pasa por la url al darle click a una de las categorias, 
// luego busca dentro de la coleccion y devuelve todos los que tengan esa categoria
async function getProductsByCategory(category) {
    return db.collection("peripherals").find({ category: category }).toArray();
}

//Basicamente cuando creas por POST un objeto nuevo en la base de datos te muestra el "insertedId": "el id que luego le pasas para el GET y demas"
//por lo que cuando se crea un objeto nuevo (para eso es el metodo .inserOne) en lugar de pasar solo el id te muestra el objeto directamente
const createProduct = async (product) => {

    const peripheral = await db.collection("peripherals").insertOne(product);
    product._id = peripheral.insertedId;

    return product;

};

// Busca dentro de la coleccion y reemplaza el producto (del cual se pasa el ID) por lo contenido en "product"
const replaceProduct = async (id, product) => {

    const replaceProduct = await db.collection("peripherals").replaceOne({ _id: new ObjectId(id) }, product);
    return replaceProduct;

};

// A direfencia del de arriba, este actualiza los datos nuevos en base al ID, el $set: es el operador que utiliza mongoDB para actualizar el objeto "product"
const editProduct = async (id, product) => {

    const editProduct = await db.collection("peripherals").updateOne({ _id: new ObjectId(id) }, { $set: product });
    return editProduct;

};

// Misma historia => Borra por ID
const deleteProduct = async (id) => {

    const deletedProduct = await db.collection("peripherals").deleteOne({ _id: new ObjectId(id) });
    return deletedProduct;

};

export {

    getProducts,
    getProductbyId,
    editProduct,
    createProduct,
    replaceProduct,
    deleteProduct,
    getProductsByCategory,

};