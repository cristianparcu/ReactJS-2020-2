import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './views/Inicio'
import AdminMenu from './views/AdminMenu'
import AgregarResidente from './views/AgregarResidente'
import ResidentesAdmin from './views/'
function App() {
  return (
    <>
    <Inicio/>
    <AdminMenu/>
    <ResidentesAdmin/>
    <AgregarResidente/>
    </>
  );
}

export default App;
