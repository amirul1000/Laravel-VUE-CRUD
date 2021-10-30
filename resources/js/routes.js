import ProductIndex from './components/products/index.vue';
import ProductCreate from './components/products/create.vue';
import ProductEdit from './components/products/edit.vue';

export const routes = [
    {
        path: '/products',
        component: ProductIndex,
        name: "ProductIndex"
    },
    {
        path: '/products/create',
        component: ProductCreate,
        name: "ProductCreate"
    },
    {
        path: '/products/edit/:id',
        component: ProductEdit,
        name: "ProductEdit"
    }
];