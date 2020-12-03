import React, { Component } from 'react'

export default class MovieLogin extends Component {
    render() {
        return (
            <div className="container mt-5" id="login">
  <div className="card">
  <article className="card-body">
    <h4 className="card-title text-center mb-4 mt-1">Login in</h4>
    <hr />
    <p className="text-success text-center">MOVIE STAR</p>
    <form>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user" /> </span>
          </div>
          <input name className="form-control" placeholder="Email or login" type="email" />
        </div> {/* input-group.// */}
      </div> {/* form-group// */}
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
          </div>
          <input className="form-control" placeholder="******" type="password" />
        </div> {/* input-group.// */}
      </div> {/* form-group// */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Login</button>
      </div> {/* form-group// */}
      <p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
    </form>
  </article>
</div>

            </div>
        )
    }
}
