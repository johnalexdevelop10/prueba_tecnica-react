import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=c2da535b`;

export const useFetch = (params) => {//params llega como parametro al useEfect
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    // cuando se llame esta function fetchMovie  queremos que el estado del loading cambie true
    const fetchMovie = (url) => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if (respuestaJson.Response === "True") {
                    //console.log("res: ", respuestaJson);
                    setData(respuestaJson.Search || respuestaJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(error => {console.log(error);})
    }
    useEffect(() => {//useEfect llama a funtion
        fetchMovie(`${API_ENDPOINT}${params}`);
    }, [params])//cuando params cambie se ejecuta 

    return {isLoading, error, data}//lo que devuelve el hook
}