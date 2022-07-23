import React from 'react';
import classes from './Registration.module.css'
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";

import {registerUserTC} from "../../store/reducers/registrationReducer";
import {useDispatch} from "react-redux";

type FormikErrorType = {
   email?: string
   password?: string
}

export const Registration = () => {
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validate: (values) => {
         const errors: FormikErrorType = {};
         if (!values.email) {
            errors.email = 'Required';
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
         }

         if (!values.password) {
            errors.password = 'Required'
         } else if (values.password.length < 8) {
            errors.password = 'Password must be more than 8 characters'
         }
         return errors;
      },
      onSubmit: values => {
         // dispatch(registerUserTC(values.email, values.password))
         formik.resetForm()
      },
   })

   return (
      <div className={classes.regWrapper}>
         <div className={classes.reg}>
            <form onSubmit={formik.handleSubmit}>
               <h1 className={classes.title}>Sign Up</h1>
               <div>
                  <input className={classes.inputEmail}
                         type="email"
                         placeholder={'Email'}
                         {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && <span style={{color: "red"}}>{formik.errors.email}</span>}
               </div>

               <div>
                  <input className={classes.inputPass}
                         type="password"
                         placeholder={'Password'}
                         {...formik.getFieldProps('password')}
                  />
               </div>
               {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
               <div>
                  <input className={classes.inputPassConfirm}
                         type="passwordConfirm"
                         placeholder={'Confirm password'}
                         {...formik.getFieldProps('passwordConfirm')}
                  />
                  {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
               </div>
               <NavLink to={'/profile'} className={classes.btn}>Sign Up</NavLink>
            </form>
            <div className={classes.signIn}>
               <span className={classes.info}>Don't have an account?</span>
               <NavLink to={'/login'} className={classes.signInLink}>
                  Sign In
               </NavLink>
            </div>
         </div>

      </div>
   );
};
