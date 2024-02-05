import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }
    
    
    useEffect( () => {
        getImages()
    }, []) //si se deja vacio el array solo se dispara 1 vez (al crear el componente)


    return {
        images,
        isLoading
    }
}
