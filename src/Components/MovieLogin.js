import React, { Component } from 'react'
import {Form,Formik,Field} from 'formik'
import {connect} from 'react-redux'
import { login } from '../redux/actions/UserAction'
 class MovieLogin extends Component {
  render() {
    return (
      <div id="bglogin">
        <div className=" " id="login"  >
        <div className="card ">
          <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-1">Login in</h4>
            <hr />
            <p className="text-success text-center">MOVIE STAR</p>
            <Formik initialValues={{
              taiKhoan:'',
              matKhau:'',

            }} onSubmit={(values)=>{
              console.log("loginvalue",values)
              this.props.dispatch(login(values));
             
            }}
             render={(formikProps)=>( <Form onSubmit={formikProps.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                  </div>
                  <input name className="form-control" placeholder="Email or Username"  name="taiKhoan" onChange={formikProps.handleChange} />
                </div> {/* input-group.// */}
              </div> {/* form-group// */}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                  </div>
                  <input className="form-control" placeholder="Password" type="password" name="matKhau" onChange={formikProps.handleChange} />
                </div> {/* input-group.// */}
              </div> {/* form-group// */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Login</button>
              </div> {/* form-group// */}
              {/* <p className="text-center"><a href="#" className="btn">Forgot password?</a></p> */}
            </Form>)}>
              
            </Formik>
          </article>
        </div>

      </div>
      </div>
    )
  }
}

export default connect()(MovieLogin);
