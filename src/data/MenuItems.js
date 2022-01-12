import { Home } from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';

export const MenuItems = [
  { id: 1, 
    path: '/',
    title: 'Home', 
    component: Home },
  {
    id: 1,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  { id: 1, 
    path: '/perfil', 
    title: 'Perfil',
    component: Perfil },
];

/*
path
id
title
component
*/
