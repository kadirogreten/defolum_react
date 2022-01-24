import React from 'react';

const Home = React.lazy(() => import('../components/Home'));
const Product = React.lazy(() => import('../components/Product'));
const Login = React.lazy(() => import('../components/Login'));
const Register = React.lazy(() => import('../components/Register'));

const routes = [
  { path: '/', exact: true, name: 'Anasayfa',component : Home },
  { path: '/product', name: 'Ürün', component: Product },
  { path: '/login', name: 'Giriş', component: Login },
  { path: '/register', name: 'Kayıt Ol', component: Register },
];

export default routes;