import React, { Component } from 'react';
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });
    return valid;
  
}

 export default class Signup extends Component {
     constructor(props){

     super(props);
    this.state= {
        firstname: "",
        lastname: "",
        email:"",
        password: "",
        formErrors: {
          firstname:"",
          lastname:"",
          email: "",
          password: ""
        }
      };
      }
    
      handleSubmit = e=> {
        e.preventDefault();
  
        // eslint-disable-next-line no-undef
        if(formValid(this.state.formErrors)){
          console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstname}
          Last Name: ${this.state.lastname}
          Email: ${this.state.email}
          Password: ${this.state.password}
          `)
        }else{
          console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
      };
  
      handlechange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
  
        
  
        // eslint-disable-next-line default-case
        switch (name) {
          case "firstname":
          formErrors.firstname = value.length < 3 ? "minimum 3 characters required":"";
          break;
          case "lastname":
          formErrors.lastname = value.length < 3 ? "minimum 3 characters required":"";
          break;
          case "email":
          formErrors.email = emailRegex.test(value) ? "":"invalid email address";
          break;
          case "password":
          formErrors.password = value.length < 6 ? "minimum 6 characters required":"";
          break;
          default:
          break;
        }
  
        this.setState({formErrors, [name]: value }, () => console.log(this.state));
      };
    render() {
      const { formErrors } = this.state;
      return (
       <div className="wrapper">
         <div className="form-wrapper">
         <Signup/>
  
           <h1>Create Account</h1>
           <form onSubmit={this.handleSubmit}noValidate>
             <div className="Firstname">
               <label htmlFor="firstname">First Name</label>
               <input className={formErrors.firstname.length > 0 ? "error" : null} placeholder="First Name" type="text" name="firstname" noValidate onChange={this.handlechange}/>
               {formErrors.firstname.length > 0 && (
                 <span className="errorMessage">{formErrors.firstname}</span>
               )}
               </div>
  
               <div className="lastname">
               <label htmlFor="lastname">Last Name</label>
               <input className={formErrors.lastname.length > 0 ? "error" : null} placeholder="Last Name" type="text" name="lastname" noValidate onChange={this.handlechange}/>
               {formErrors.lastname.length > 0 && (
                 <span className="errorMessage">{formErrors.lastname}</span>
               )}
               </div>
  
               <div className="email">
               <label htmlFor="email">Email</label>
               <input className={formErrors.email.length > 0 ? "error" : null} placeholder="Email" type="email" name="email" noValidate onChange={this.handlechange}/>
               {formErrors.email.length > 0 && (
                 <span className="errorMessage">{formErrors.email}</span>
               )}
               </div>
  
               <div className="password">
               <label htmlFor="password">Password</label>
               <input className={formErrors.password.length > 0 ? "error" : null} placeholder="password" type="password" name="password" noValidate onChange={this.handlechange}/>
               {formErrors.password.length > 0 && (
                 <span className="errorMessage">{formErrors.password}</span>
               )}
               </div>
               <div className="createAccount">
                 <button type="submit">Create Account</button>
                 <small>Already Have an account?</small>
                 </div>
               </form>
               </div>
                           </div>
      );
               }
            }