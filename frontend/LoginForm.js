import { useEffect, useState } from "react"

function LoginForm () {
    <html>
        <head>
            <link rel="stylesheet" href="style.css" />
        </head>
        <body>
            <div className='login-card'>
                <h2>Login</h2>
                <h3>Enter your credentials</h3>
                <form className='login-form'>
                    <input type="text" placeholder= "Username"></input>
                    <input type="text" placeholder='Password'></input>
                    <a href='ForgetPassword-form.js'>Forgot your Password? </a>
                    <button>LOGIN</button>
                </form>
            </div>
        </body>
    </html>
}

module.exports = LoginForm