import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {
  
  const initialState = {
    data: null,  
    loading: true,
    error: null
  };
  
  const [state, setState] = useState(initialState);
  const isMounted = useRef(true);


  useEffect( () => {
    return () => isMounted.current = false;
  }, [])

  useEffect( () => {

    setState(initialState);

    fetch(url)
      .then( resp => resp.json())
      .then( data => {

        if(isMounted.current){
          const newState = {
            data,
            loading: false,
            error: null
          }
  
          setState(newState);
        }else{
          console.log('Ya no se llamo');
        }
      })
      .catch( () =>{
        
        setState({
          data: null,
          loading: false,
          error: 'Info can not be loaded'
        });

      });

  }, [url]); 

  return state;

}
