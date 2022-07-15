import React from 'react'
import { useFormulario } from '../hooks/useFormulario';
import Swal from 'sweetalert2'

const Formulario = ({setNombrePersonaje}:any) => {
  const [inputs, handleChange, reset]= useFormulario({
    nombre:''
  })
   
  const {nombre} = inputs
  
  const handleSubmit= (e:React.FormEvent<HTMLFormElement> ) =>{
    e.preventDefault()
    console.log(nombre);

    if(!nombre.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Escriba algo por favor',
        icon: 'error',    
      })
      
    }

    setNombrePersonaje(nombre.trim().toLowerCase());
    reset();
  }
  
  return (
    <>
        <form onSubmit={handleSubmit}>
         <input placeholder='ingrese personaje' 
                type       ='text'
                className  ='form-control mb-2'
                value      ={nombre}
                onChange   ={handleChange}
                name       ='nombre'
                />
        <button 
        type     ='submit' 
        className='btn btn-outline-secondary mb-2'
        >buscar</button>
        </form>
    </>
  )
}

export default Formulario