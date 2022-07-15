import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Heroe from './Heroe';
import { Loading } from './Loading';


const baseURL       =  `https://gateway.marvel.com:443/v1/public/characters?`
const hash          =  `hash=329d2167bd3aa162a8b86b817902432c`
const apiKeyPublic  = `apikey=6a79c37d413b065e4d356c688deef66c`

const PintarDatos = ({nombrePersonaje}:any) => {
 
  const [personajes,setPersonajes]=useState([]);
  const [loading,setLoading]=useState(false);
  
  useEffect(() => {
    
    localStorage.setItem('nombreApi',JSON.stringify(nombrePersonaje));
    consumirApi(nombrePersonaje);
  
  }, [nombrePersonaje]);
  

  const consumirApi = async(nombre:string)=>{
    setLoading(true)
    try{
      
      let respuesta = await fetch(`${baseURL}ts=1&${apiKeyPublic}&${hash}`);
      console.log(respuesta)  
      
      if(nombre.length>0){

      const newBaseURL = baseURL+`nameStartsWith=${nombre}&` 
      
      respuesta = await fetch(`${newBaseURL}ts=1&${apiKeyPublic}&${hash}`);
      nombre.trim()
      
      console.log('heroes',baseURL)
     }
      
     
      
      
      
     const datos = await respuesta.json();
      
     if(respuesta.ok && datos.data.total===0){
        return Swal.fire({
          title: 'Error!',
          text: 'Personaje no encontrado',
          icon: 'error',    
        })}
        
       

        console.log(datos.data.results);
       
        setPersonajes(datos.data.results);
   
  }
    
  catch(error){
    console.log(error)
  }
    finally{
      setLoading(false)
    }
  }

  if(loading){
    return <Loading />
  }
  
  return (
    <div className='row'>
        {
          personajes.map((item:any) =>(
            <Heroe key={item.id} heroe = {item}/>
          ))
        }
    </div>
  )
}

export default PintarDatos