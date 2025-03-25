import createDebug from 'debug';
import { ProductsPage } from '../views/pages/products/products-page.js';
import { DetailPage } from '../views/pages/products/detail-page.js';
import { UpsertProductsPage } from '../views/pages/products/upsert-page.js';
import { HttpError } from '../errors/http-error.js';
import { ANIMALS } from '../data/mock.js';
const debug = createDebug('demo:controllers:products');
debug('Loaded module');
export class ProductsController {
    data = ANIMALS;
    constructor() {
        debug('Instanciando controller');
    }
    getAllPage = (req, res) => {
        debug('Petición recibida en getAllPage');
        const view = new ProductsPage();
        res.send(view.render({ mainContent: this.data }));
    };
    getProduct = (id) => {
        const data = this.data.find((item) => item.id === id);
        if (!data) {
            const error = new HttpError(`Product ${id} not found`, 404, 'Not Found');
            throw error;
        }
        return data;
    };
    showDetailPage = (item, res) => {
        const title = `${item.name} | Demo Products`;
        const view = new DetailPage(title);
        res.send(view.render({ mainContent: item }));
    };
    getDetailPage = (req, res, next) => {
        debug('Petición recibida en getDetailPage');
        const { id } = req.params;
        try {
            const data = this.getProduct(id);
            this.showDetailPage(data, res);
        }
        catch (error) {
            next(error);
        }
    };
    getCreatePage = (req, res) => {
        debug('Petición recibida en createPage');
        const title = `Create | Demo Products`;
        const view = new UpsertProductsPage(title);
        res.send(view.render());
    };
    getUpdatePge = (req, res, next) => {
        debug('Petición recibida en updatePage');
        const { id } = req.params;
        try {
            const data = this.getProduct(id);
            const title = `${data.name} update | Demo Products`;
            const view = new UpsertProductsPage(title);
            const page = view.render({ mainContent: data });
            res.send(page);
        }
        catch (error) {
            next(error);
        }
    };
    createProduct = (req, res) => {
        debug('Petición POST recibida en createProduct');
        const data = req.body;
        data.id = crypto.randomUUID();
        this.data.push(data);
        this.showDetailPage(data, res);
    };
    getProductIndex = (id) => {
        const index = this.data.findIndex((item) => item.id === id);
        if (index < 0) {
            const error = new HttpError(`Product ${id} not found`, 404, 'Not Found');
            throw error;
        }
        return index;
    };
    updateProduct = (req, res, next) => {
        debug('Petición PUT recibida en updateProduct');
        const { id } = req.params;
        const data = { ...req.body, id };
        try {
            const index = this.getProductIndex(id); // throws error if not found
            this.data[index] = data;
            this.showDetailPage(data, res);
        }
        catch (error) {
            next(error);
        }
    };
    deleteProduct = (req, res, next) => {
        debug('Petición DELETE recibida en deleteProduct');
        const { id } = req.params;
        try {
            const index = this.getProductIndex(id); // throws error if not found
            this.data.splice(index, 1);
            res.redirect('/products');
        }
        catch (error) {
            next(error);
        }
    };
}
