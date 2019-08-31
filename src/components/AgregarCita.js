import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { agregarCitaAction } from '../actions/citasActions' 
import { validaFormularioAction } from '../actions/validarActions';
import uuid from 'uuid/v4'

const AgregarCita = () => {

  // State del componente
  const [ pet , savePet ] = useState('');
  const [ owner , saveOwner ] = useState('');
  const [ date , saveDate ] = useState('');
  const [ hour , saveHour ] = useState('');
  const [ symptom , saveSymptom ] = useState('');

  const dispatch = useDispatch();
  const addNewAppointment = (cita) => dispatch( agregarCitaAction(cita) )
  const validateForm = (estado) => dispatch( validaFormularioAction(estado) ) 

  // useSelector es similar a mapStateToProps en Hooks!
  const error = useSelector( (estate) => estate.error )

  // Cuando el form es enviado!
  const submitNewAppointment = (e) => {
    e.preventDefault();

    // Validar Form
    if( pet.trim() === '' || owner.trim() === '' || symptom.trim() === '' ) {
        validateForm(true);
        return;
    }
    validateForm(false);

    // Crear la nueva cita
    addNewAppointment({
        id: uuid(),
        mascota: pet,
        proopietario: owner,
        fecha: date,
        hora: hour,
        sintomas: symptom
    })

    // Aqui puedes mandar a db creo!


    // Reiniciar el formulario
    resetForm();

  }


 const resetForm = () => {
    savePet('');    
    saveOwner('');
    saveDate('');
    saveHour('');
    saveSymptom('');
  }

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
        <form onSubmit={submitNewAppointment}>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Mascota
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Mascota"
                value={ pet }
                onChange={ e => savePet(e.target.value) }
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Dueño
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Dueño de la Mascota"
                value={ owner }
                onChange={ e => saveOwner(e.target.value) }
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input
                type="date"
                className="form-control"
                value={ date }
                onChange={ e => saveDate(e.target.value) }
              />
            </div>

            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
            <div className="col-sm-8 col-lg-4">
              <input
                type="time"
                className="form-control"
                value={ hour }
                onChange={ e => saveHour(e.target.value) }
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
            <div className="col-sm-8 col-lg-10">
              <textarea
                className="form-control"
                value={ symptom }
                onChange={ e => saveSymptom(e.target.value) }
              >

              </textarea>
            </div>
          </div>
          <div className="form-group row justify-content-end">
            <div className="col-sm-3">
              <button type="submit" className="btn btn-success w-100">
                Agregar
              </button>
            </div>
          </div>
        </form>

        {/* El div podria ser un componente */}
        { error.error ? <div>Llene los campos obligatorios!</div> : null }
      </div>
    </div>
  );
};

export default AgregarCita;
