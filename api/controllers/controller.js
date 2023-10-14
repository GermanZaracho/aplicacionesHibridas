import * as service from "../../services/service.js";

//Los controladores reciben la informacion de las rutas y les indican que hacer a las funciones de los servicios
const getProducts = (req, res) => {
    const filter = req.query;

    service.getProducts(filter).then((products) => {
        res.status(200).json(products);
    });
};

const getProductById = (req, res) => {
    const id = req.params.id;
    service.getProductbyId(id).then((product) => {
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json();
        }
    });
};

const addProduct = (req, res) => {
    const product = {
        productId: req.body.productId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        brand: req.body.brand,
        category: req.body.category,
        link: req.body.link, 
        image: req.body.image
    };

    service
        .createProduct(product)
        .then((newProduct) => {
            res.status(201).json(newProduct);
        })
        .catch((error) => res.status(500).json());
};

const replaceProduct = (req, res) => {
    const id = req.params.id;

    const product = {
        productId: req.body.productId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        brand: req.body.brand,
        category: req.body.category,
        link: req.body.link, 
        image: req.body.image,
    };

    service.replaceProduct(id, product).then((editedProduct) => {
        if (editedProduct) {
            res.status(200).json(editedProduct);
        } else {
            res.status(404).json();
        }
    });
};

//Simples comparaciones para actualizar propiedades del objeto product, luego llama al servicio y actualiza la informacion en la DB
const updateProduct = (req, res) => {
    const id = req.params.id;

    const product = {};

    if (req.body.productId) {
        product.productId = req.body.productId;
    }

    if (req.body.name) {
        product.name = req.body.name;
    }
    
    if (req.body.price) {
        product.price = req.body.price;
    }

    if (req.body.description) {
        product.description = req.body.description;
    }

    if (req.body.brand) {
        product.brand = req.body.brand;
    }

    if (req.body.category) {
        product.category = req.body.category;
    }

    if (req.body.link) {
        product.link = req.body.link;
    }

    if (req.body.image) {
        product.image = req.body.image;
    }

    service.editProduct(id, product).then((editedProduct) => {
        if (editedProduct) {
            res.status(200).json(editedProduct);
        } else {
            res.status(404).json();
        }
    });
};

const deleteProduct = (req, res) => {
    const id = req.params.id;
    service
        .deleteProduct(id)
        .then(() => {
            res.status(204).json();
        })
        .catch((error) => res.status(500).json());
};

export {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    replaceProduct,
    deleteProduct,
};