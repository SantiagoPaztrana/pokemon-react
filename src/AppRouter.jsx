import React from "react"
import { Route, Router, Routes } from "react-router-dom"
import { Navigation } from "./assets/componets/Navigation"
import { HomePage, PokemonPage, SearchPage } from "./assets/pages"
/////definimos todas las rutas necesarias
export const AppRouter = () =>{

    //ruta principal o anidada

    //rutas para cada pagina
    return (

        <Routes> 

            <Route path='/' element={<Navigation/>}> 
                <Route index element={<HomePage/>} />
                <Route path='pokemon/:id' element={<PokemonPage />} /> 
                <Route path='search' element={<SearchPage/>} />
            </Route>

            <Route path='*' element={<Navigation to='/' />} />
            

        </Routes>

        

    );
};