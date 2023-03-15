import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Employpart/LoginView.vue')
  },{
    path : "/",
    name : 'dashboard',
    component : ()=>import('../views/main(Home)/DashboardView.vue')
  },
  {
    path : '/employmanage',
    name : 'employmanage',
    component : () => import('../views/Adminpart/Employ/EmploymanageView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/productmanage',
    name: 'productmanage',
    component: () => import('../views/Employpart/ProductmanageView.vue')
  },
  {
    path: '/adminnav',
    name: 'adminnav',
    component: () => import('../components/template/Adminnav.vue')
  },
  {
    path: '/createu',
    name: 'createu',
    component: () => import('../views/Adminpart/Employ/CreateUserView.vue')
  },
  {
    path: '/editu',
    name: 'editu',
    component: () => import('../views/Adminpart/Employ/EditView.vue')
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import('../views/Adminpart/Brands/BrandView.vue')
  },
  {
    path: '/vender',
    name: 'vender',
    component: () => import('../views/Adminpart/Venders/VendersView.vue')
  },
  {
    path: '/createbr',
    name: 'createbr',
    component: () => import('../views/Adminpart/Brands/CreateBrandView.vue')
  },
  {
    path: '/createven',
    name: 'createven',
    component: () => import('../views/Adminpart/Venders/CreateVenderView.vue')
  },
  {
    path: '/producttype',
    name: 'producttype',
    component: () => import('../views/Adminpart/Producttype/ProducttypeView.vue')
  },
  {
    path: '/createproducttype',
    name: 'createproducttype',
    component: () => import('../views/Adminpart/Producttype/CreateProducttypeView.vue')
  },
  {
    path: '/adminproduct',
    name: 'adminproduct',
    component: () => import('../views/Adminpart/Product/AdminProductView.vue')
  },
  {
    path: '/createadminpro',
    name: 'createadminpro',
    component: () => import('../views/Adminpart/Product/CreateAdminproView.vue')
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: () => import('../views/Adminpart/Receipt/ReceiptView.vue')
  },
  {
    path: '/receipt/:id',
    name: 'receiptdetail',
    component: () => import('../views/Adminpart/Receipt/ReceiptdetailView.vue')
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: () => import('../views/Adminpart/Warehouse/WarehouseView.vue')
  },
  {
    path: '/createwarehouse',
    name: 'createwarehouse',
    component: () => import('../views/Adminpart/Warehouse/CreatewarehouseView.vue')
  },


  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// vue2ver--->
// import {createApp} from 'vue'

// import App from '@/App.vue'
// import LoginView from '@/views/Loginpart/LoginView.vue'
// import Register from '@/views/Registpart/Register.vue'
// import afterlog from '@/components/template/homepage.vue'
// import test from '@/views/test.vue'


// const router = createRouter({
//   history: createWebHistory(),
//   routes:[
//     {path:'/login',component:LoginView},
//     {path:'/register',component:Register},
//     {path:'/afterlog',component:afterlog},
//     {path:'/test',component:test},
//   ]
// })

// const app = createApp(App)
// // app.use(router)

// router.isReady().then(() => {
//     app.mount('#app')
// })







