import React from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';



export default function Confirmacion() {

  const { register, reset, watch } = useForm()
  const incluirNombre1 = watch('incluirNombre1');
  const incluirNombre2 = watch('incluirNombre2');
  const incluirNombre3 = watch('incluirNombre3');

  function clickMe() {
    swal({
      title: "Confirmado!",
      text: "Su confirmación ha sido enviada con éxito",
      icon: "success",
      button: "ok",
    });
  }


  function Submit(e) {
    const formElement = document.querySelector("form")
    e.preventDefault()
    console.log("Submitted")
    const formData = new FormData(formElement)
    fetch("https://script.google.com/macros/s/AKfycbxMm1C4zcfzDQbZufaF6g4FKsF4STwxRda4vuBpHcMt6Fxtl5bl8ZBVL166Z5-iFxJWHw/exec", {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    }).catch((error) => console.log(error));
    reset();

  }

  return (
    
    <div className="mt-8 mx-auto sm:w-full">
      <h2 className='text-5xl font-bold py-10 text-center title text-teal-900'>Confirmación</h2>
      <div className="bg-slate-100 py-8 mt-10 mb-40 shadow rounded-lg px-5 md:w-[600px] mx-auto">
        <form className="mb-0 space-y-8" action="#" method="POST" onSubmit={(e) => Submit(e)}>

          <div>
            <input placeholder="Nombre" name="Nombre" id="Nombre" type="text" className="w-full border-gray-300 rounded-lg shadow-sm" />
          </div>

          <div>
            <input placeholder="Nombre" name="Nombre1" type="text" className="w-full border-gray-300 rounded-lg shadow-sm" />
          </div>


          <div className="flex flex-wrap mb-2 text-1xl sm:text-1xl">
            <div className="w-2/5 mb-0">
              <legend className="">Añadir Nombres</legend>
            </div>
            <div className="w-1/5 px-4 mb-0">
              <input className="checkbox mb-1" type="checkbox" id="incluirNombre1" name="active" {...register('incluirNombre1')} />
              <label className="pl-1" for="incluirNombre1">+1</label>
            </div>
            <div className="w-1/5 px-4 mb-0">
              <input className="checkbox mb-1" type="checkbox" id="incluirNombre2" name="active" {...register('incluirNombre2')} />
              <label className="pl-1" for="incluirNome2">+2</label>
            </div>
            <div className="w-1/5 px-4 mb-0">
              <input className="checkbox mb-1" type="checkbox" id="incluirNombre3" name="active" {...register('incluirNombre3')} />
              <label className="pl-1" for="incluirNombre3">+3</label>
            </div>
          </div>
          
                                  {incluirNombre1 && (
                                    <div className="text-2xl">
                                      <input placeholder="Nombre" name="Nombre2" type="text" className="w-full border-gray-300 rounded-lg shadow-sm" />
                                    </div>
                                  )}

                                  {incluirNombre2 && (
                                    <div>
                                      <input placeholder="Nombre" name="Nombre2" type="text" className="w-full border-gray-300 rounded-lg shadow-sm my-3" />
                                      <input placeholder="Nombre" name="Nombre3" type="text" className="w-full border-gray-300 rounded-lg shadow-sm my-3" />
                                    </div>
                                  )}

                                  {incluirNombre3 && (
                                    <div>
                                      <input placeholder="Nombre" name="Nombre2" type="text" className="w-full border-gray-300 rounded-lg shadow-sm my-3" />
                                      <input placeholder="Nombre" name="Nombre3" type="text" className="w-full border-gray-300 rounded-lg shadow-sm my-3" />
                                      <input placeholder="Nombre" name="Nombre4" type="text" className="w-full border-gray-300 rounded-lg shadow-sm my-3" />
                                    </div>
                                  )}
          <hr/>

          <div className="flex text-2xl">
            <div className="flex items-center pr-10">
              <legend className="form-pergunta ">Autobus de Madrid:</legend>
            </div>            
            <div className="flex items-center pr-10">
              <input className="radio" type="radio" id="autobusMadridSi" name="AutobusMadrid" value="Sí" />
              <label className="pl-2" for="autobusMadridSi">Sí</label>
            </div>
            <div className="flex items-center">
              <input className="radio" type="radio" id="autobusMadridNo" name="AutobusMadrid" value="No" />
              <label className="pl-2" for="autobusMadridNo">No</label>
            </div>            
          </div>

          <hr/>

          <div className="flex text-2xl">
            <div className="flex items-center pr-10">
              <legend className="form-pergunta">Autobus de Rascafría:</legend>
            </div>            
            <div className="flex items-center pr-10">
              <input className="radio" type="radio" id="autobusMadridSi" name="AutobusRascafria" value="Sí" />
              <label className="pl-2" for="autobusMadridSi">Sí</label>
            </div>
            <div className="items-center mr-4 text-2xl">
              <input className="radio" type="radio" id="autobusMadridNo" name="AutobusRascafria" value="No" />
              <label className="pl-2" for="autobusMadridNo">No</label>
            </div>            
          </div>

          <hr/>

          <div>
            <textarea name="Observaciones" placeholder="Observaciones" className="w-full border-gray-300 rounded-lg shadow-sm"/>
          </div>

          <div>
            <input className="shadow bg-teal-800 hover:bg-teal-200 focus:shadow-outline focus:outline-none text-teal-200 hover:text-teal-800 font-bold py-2 px-10 rounded" type="submit" onClick={clickMe} />
          </div>

        </form>
      </div>
    </div>



  );
}

