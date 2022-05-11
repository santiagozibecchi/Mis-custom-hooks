import { useEffect, useRef, useState } from "react"

const useFetch = (url) => {

      // Es true porque la primera vez se encuentra renderizado
      const isMounted = useRef(true)

      const [state, setState] = useState({
            data: null,
            loading: true,
            error: null
      });

      useEffect(() => {

            // Cuando el efecto se desmonte
            return () => {
                  isMounted.current = false;
            }

      }, [])


      // Solo se ejecuta cuando el url cambia
      useEffect(() => {

            // Para visualizar el loading cuando cambiamos de quote
            setState({ data: null, loading: true, error: null })

            fetch(url)
                  .then(resp => resp.json())
                  .then(data => {

                        if (isMounted.current) {
                              setState({
                                    loading: false,
                                    error: null,
                                    data
                              });
                        } else {
                              console.log('El setState no se llamo');
                        }

                  })
      }, [url])

      return state;
}

export default useFetch