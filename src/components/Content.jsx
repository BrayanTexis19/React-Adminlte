import React from 'react';

const Content = () => {
  return (
    <>
        <div className="content-wrapper">
            <div className="content-header">
            <div className="container">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0"> Top Navigation <small>Example 3.0</small></h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Layout</a></li>
                    <li className="breadcrumb-item active">Top Navigation</li>
                    </ol>
                </div>
                </div>
            </div>
            </div>

            <div className="content">
              <div className="container">
                 <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-8">
                        <div className="card card-primary">
                            <div className="card-header">       
                                <h4 className='card-title'>
                                    <i className="fas fa-user-circle mr-2"></i>
                                    Agregar alumno
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Nombre</label>
                                    <input type="text" name="" id="" className='form-control' placeholder='Escriba aqui el nombre' maxLength={20}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Apellidos</label>
                                    <input type="text" name="" id="" className='form-control' placeholder='Escriba aqui los apellidos'/>
                                </div>
                                <div className="d-flex">
                                <div className="form-group col-lg-6">
                                    <label htmlFor="">Edad</label>
                                    <input type='number' name="" id="" className='form-control' placeholder='0'/>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label htmlFor="">Calificación</label>
                                    <input type="number" name="" id="" className='form-control' placeholder='7' step={0.5} max={10} min={7}/>
                                </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name="" id="" className='form-control' placeholder='micorreo@gmail.com'/>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-success btn-lg float-right'>Aceptar</button>
                                <button className="btn btn-danger btn-lg">Cancelar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-4">
                        <div className="card card-primary">
                            <div className="card-header">       
                                <h4 className='card-title'>
                                    <i className="fas fa-user-circle mr-2"></i>
                                    Agregar alumno
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Nombre</label>
                                    <input type="text" name="" id="" className='form-control' placeholder='Escriba aqui el nombre' maxLength={20}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Apellidos</label>
                                    <input type="text" name="" id="" className='form-control' placeholder='Escriba aqui los apellidos'/>
                                </div>
                                <div className="form-group">
                                <label htmlFor="">Edad</label>
                                    <input type='number' name="" id="" className='form-control' placeholder='0'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Calificación</label>
                                    <input type="number" name="" id="" className='form-control' placeholder='7' step={0.5} max={10} min={7}/>
                                </div>
                              
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name="" id="" className='form-control' placeholder='micorreo@gmail.com'/>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-success btn-lg float-right'>Aceptar</button>
                                <button className="btn btn-danger btn-lg">Cancelar</button>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Content;