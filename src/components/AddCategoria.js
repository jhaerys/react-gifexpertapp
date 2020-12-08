import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategoria = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputCgange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) { // validacion para vaciar el input
            setCategorias(cats => [inputValue, ...cats])
            setinputValue('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>

            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text bg-dark" id="basic-addon1">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputCgange}
                class="form-control bg-dark" 
                placeholder="Escribe el nombre del gif aqui..." 
                aria-label="Username" 
                aria-describedby="basic-addon1"/>
            </div>
        </form>
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
