import React, { Component } from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik'

import {userService} from '../Services/index'
import { singupUserSchema } from '../Services/User'

export default class MovieSignUp extends Component {
  _handleSubmit=(values)=>{
    userService.signUp(values).then(res=>{console.log(res);this.props.history.push('/');}).catch(err=>{console.log()})
  }
    render() {
        return (
            <div className="" id="signup">
 <Formik  className="bg_signup" initialValues={{
     taiKhoan:'',
     matKhau:'',
     hoTen:'',
     email:'',
     soDT:'',
     maNhom:'GP01'
   }}
   validationSchema={singupUserSchema}
   onSubmit={this._handleSubmit}
   render={(formikProps)=>(
   <form className="text-center border border-light p-5 form-group container bg-light" onSubmit={formikProps.handleSubmit}  >
   <p className="h4 mb-4 text-dark">Sign up</p>
   
   {/* E-mail */}
   <Field type="text"  className="form-control " placeholder="Account" name="taiKhoan" onChange={formikProps.handleChange} />
   <ErrorMessage name="taiKhoan">
   {msg => <div className="alert alert-danger">{msg}</div>}
     </ErrorMessage>  
   {/* Password */}
   <Field type="password" id="defaultRegisterFormPassword" className="form-control mt-3" placeholder="Password"  name="matKhau" onChange={formikProps.handleChange} />
   <ErrorMessage name="matKhau">
   {msg => <div className="alert alert-danger">{msg}</div>}
     </ErrorMessage> 
   
   {/* Phone number */}
   <Field type="text" id="defaultRegisterPhonePassword" className="form-control mt-3" placeholder="Full Name"  name="hoTen" onChange={formikProps.handleChange} />
   <ErrorMessage name="hoTen">
   {msg => <div className="alert alert-danger">{msg}</div>}
     </ErrorMessage> 
   
   <Field type="email" id="defaultRegisterPhonePassword" className="form-control mt-3" placeholder="Email"  name="email" onChange={formikProps.handleChange} />
   <ErrorMessage name="email">
   {msg => <div className="alert alert-danger">{msg}</div>}
     </ErrorMessage> 
     
     <Field type="text" id="defaultRegisterPhonePassword" className="form-control mt-3" placeholder="Phone Number"  name="soDT" onChange={formikProps.handleChange} />
   <ErrorMessage name="soDT">
   {msg => <div className="alert alert-danger">{msg}</div>}
     </ErrorMessage> 
   
   {/* Newsletter */}
   {/* <div className="custom-control custom-checkbox">
     <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
     <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
   </div> */}
   {/* Sign up button */}
   <button className="btn btn-info my-4 btn-block" type="submit" name="maNhom"  >Sign in</button>
   {/* Social register */}
   <p>or sign up with:</p>
   <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text" /></a>
   <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text" /></a>
   <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text" /></a>
   <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text" /></a>
   <hr />
   {/* Terms of service */}
   <p className="text-light">By clicking 
     <span > Sign up</span> you agree to our
     <a >terms of service</a>
   </p></form>
)}
 ></Formik>

 

            </div>
        )
    }
}
