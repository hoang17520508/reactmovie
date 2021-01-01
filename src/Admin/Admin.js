import React, { Component } from 'react'
import './Admin.css'
export default class Admin extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <div className="row">
                <div className="col-2">
    <div className="">
  <img src="./img/admin/tg_group_admins.jpg"  style={{width:"200px",height:"100px"}}/>
  <ul className="nav flex-column">
    <li className="nav-item">
      <a className="nav-link" href="#">Films</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Showtimes</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">User</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="#">Disabled</a>
    </li>
  </ul>
</div>

                </div>
                <div className="col-10">wtf</div>
                </div> */}
        <div className="admin">
          <div className="row " >
            <img className="col-2" src="./img/admin/tg_group_admins.jpg" style={{ width: "200px", height: "100px" }} />
            <h2 className="display-4 text-center text-primary col-10  ">Admin Manager</h2>
          </div>
          <ul className="nav nav-tabs " id="myTab" role="tablist">
            <li className="nav-item ">
              <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Film</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#messages" role="tab" aria-controls="messages">Showtimes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Users</a>
            </li>
          </ul>
          <div className="tab-content ">
            <div className="tab-pane active " id="home" role="tabpanel">
              
            </div>
            <div className="tab-pane " id="profile" role="tabpanel">..2.</div>
            <div className="tab-pane " id="messages" role="tabpanel">.3..</div>
            <div className="tab-pane " id="settings" role="tabpanel">.4..</div>
          </div>
        </div>


      </div>
    )
  }
}
