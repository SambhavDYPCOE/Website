import React from 'react'
import classes from './Register.module.css'

const Register = () => {
  return (
    <>
        <div className={classes.background}>
            <div className={classes.registerForm}>
                <h1 className={classes.heading}> Register</h1>
                <form method="post" className={classes.formData}>
                    <label className={classes.userName}>Name</label>
                    <input type="text" className={classes.userInput} />
                    <label className={classes.userMail}>Email</label>
                    <input type="email" className={classes.userInput} />
                    <label className={classes.userContact}>Phone Number</label>
                    <input type="number" className={classes.userInput} />
                </form>
            </div>
        </div>
    </>
  )
}

export default Register