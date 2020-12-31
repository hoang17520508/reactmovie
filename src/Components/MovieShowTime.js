import React, { Component } from 'react'

export default function MovieShowTime() {

  return (
    <div className="container mb-5">

      <h1 className="text-left display-4 text-warning">Booking Now</h1>
      <div className="row" style={{ border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,.3)', borderRadius: '5px', padding: '10px' }}>
        <div className="col-4">

          <select name="cars" id="cars" style={{ border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,.3)', borderRadius: '5px', padding: '10px',width:'100%' }}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>


        </div>
        <div className="col-2">
          <select name="cars" id="cars" style={{ border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,.3)', borderRadius: '5px', padding: '10px',width:'100%' }}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

        </div>
        <div className="col-2" >
          <select name="cars" id="cars" style={{ border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,.3)', borderRadius: '5px', padding: '10px',width:'100%' }}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

        </div>
        <div className="col-2">
          <select name="cars" id="cars" style={{ border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,.3)', borderRadius: '5px', padding: '10px',width:'100%' }}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
          <div className="col-2"><button className="btn btn-warning">Booking Ticket</button></div>
        


      </div>
    </div>
  )
}
