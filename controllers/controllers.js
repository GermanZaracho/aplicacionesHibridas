import * as service from "../services/service.js";
import * as view from "../views/view.js";

//Los controladores reciben la informacion de las rutas y les indican que hacer a las funciones de los servicios
const getProducts = (req, res) => {
    service.getProducts({ deleted: true }).then((products) => {
        res.send(view.createProductListPage(products));
    });
};

const getProductbyId = (req, res) => {
    const idProduct = req.params.product_id;
    console.log("hola4", idProduct, "hola5",req, req.params, "hola6");
    service.getProductbyId(idProduct).then((product) => {
        if (product) {
            res.send(view.createDetailPage(product));
        } else {
            res.send(view.createPage("Error", "<p>The product was not found</p>"));
        }
    });
};

const getProductsByCategory = (req, res) => {
    console.log("hola controllers");
    const category = req.params.category;

        service.getProductsByCategory(category).then((products) => {

            console.log(products, "hola3", category);
            if (products) {
                res.send(view.createProductListPage(products));
            } else {
                res.send(view.createPage("Error", "<p>The product was not found</p>"));
            }

        })
        .catch((error) => res.send(view.createPage("Error", `<p> ${error}</p>`)));

};



const createProductFormPage = (req, res) => {
    res.send(view.createForm());
};

const createProduct = (req, res) => {
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

    service
        .createProduct(product)
        .then((newProduct) => {
            res.send(
                view.createPage(
                    "Product created",
                    `<p>The product ${newProduct.name} was created with id ${newProduct._id}</p>`
                )
            );
        })
        .catch((error) => res.send(view.createPage("Error", `<p> ${error}</p>`)));
};

const editProductFrom = (req, res) => {
    const id = req.params.product_id;
    service.getProductbyId(id).then((product) => {
        if (product) {
            res.send(view.editForm(product));
        } else {
            res.send(
                view.createPage(
                    "The product was not found",
                    "<h1>The requested product was not found</h1>"
                )
            );
        }
    });
};

const editProduct = (req, res) => {
    const id = req.params.product_id;

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

    // console.log("hola1", id);

    service.editProduct(id, product).then((editedProduct) => {
        // console.log("hola2");
        // console.log(product);
        if (editedProduct) {
            res.send(view.createPage("Product edited", `<h2>The product "${product.name}"  was successfully edited</h2>`))
        } else {
            res.send(view.createPage("Could not be edited", "<h1>Could not be edited</h1>"))
        }
    })

        .catch((error) => {
            res.send(view.createPage("Error", `<p>${error}</p>`));
        });
}

const deleteProductFrom = (req, res) => {

    const id = req.params.product_id
    console.log(id);
    service.getProductbyId(id).then((product) => {
        if (product) {
            res.send(view.deleteForm(product));
        } else {
            res.send(
                view.createPage(
                    "It was not found",
                    "<h1>The requested product was not found</h1>"
                )
            );
        }
    });

}

const deleteProduct = (req, res) => {

    const id = req.params.product_id
    service.deleteProduct(id)
        .then((deleteProduct) => {
            if (deleteProduct) {
                res.send(view.createPage("Deleted product", `<h2>The product #${deleteProduct._id} was successfully deleted</h2>`))
            } else {
                res.send(view.createPage("Could not be deleted", "<h1>Could not be deleted</h1>"))
            }
        })

}

export {

    getProducts,
    getProductbyId,
    createProductFormPage,
    createProduct,
    editProductFrom,
    editProduct,
    deleteProductFrom,
    deleteProduct,
    getProductsByCategory

};