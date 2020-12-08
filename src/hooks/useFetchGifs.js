import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (categoria) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    }) 

    useEffect( () => {

        setTimeout( () => {

            getGifs(categoria)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading:false
                })
            })

    },1000)
    }, [categoria])

    return state // el state es el data y el loading antes definido

}
