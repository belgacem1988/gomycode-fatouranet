import React from 'react';

const SignIn = React.lazy(() => import('./SignIn'));
const Formm = React.lazy(() => import('./Client'));
const Fournisseur = React.lazy(() => import('./Fournisseur'));
const Produit = React.lazy(() => import('./Produit'));
const Facture = React.lazy(() => import('./Facture'))
const Charge = React.lazy(() => import('./Charge'))


const routes = [
  { path: '/', exact: true, name: 'Home', component: SignIn },
  { path: '/SignIn', exact: true, name: 'login', component: SignIn },
  { path: '/Users', exact: true, name: 'client', component: Formm },
  { path: '/Users/Clients', name: 'client', component: Formm},
  { path: '/Fournisseur', name: 'fournisseur', component: Fournisseur},
  { path: '/Produit', name: 'produit', component: Produit},
  { path: '/Facture', name: 'produit', component: Facture},
  { path: '/Charge', name: 'Facture-achat', component: Charge}
];

export default routes;
