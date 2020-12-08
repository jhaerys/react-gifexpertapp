
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({categoria}) => {
    
    const {data, loading} = useFetchGifs(categoria)
    
    return (
        <>
            <h3>{categoria}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="card-grid">
                
                    {
                    data.map(images => (

                        <GifGridItem 
                            key={images.id}
                            {...images} 
                        />

                    ))
                    }
            </div>
        </>
    )
}
