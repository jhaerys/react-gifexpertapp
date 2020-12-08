import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categorias = ['One Puch', 'Samurai X', 'Dragon ball'];
    const [categorias, setCategorias] = useState(['naruto'])

    return (
        <>
            <h2>Busca tu Gif</h2>
            <AddCategoria setCategorias={setCategorias}/>
            <hr/>

            <ol>
                {
                    categorias.map((categorias) =>  (
                    <GifGrid 
                        key={categorias}
                        categoria={categorias} 
                    />
                    ))
                }
            </ol>
        </>
        
    )
}
