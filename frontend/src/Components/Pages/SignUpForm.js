const React = require('react')

function SignUpForm() {
    <html>
        <head>
            <link rel="stylesheet" href="App.css" />
        </head>
        <body>
            <div className='background'></div>
            <div className='signup'>
                <img className='logo'></img>
                <h2>Create Account</h2>
                <form className='form'>
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type='submit' className='btn1'>SIGN UP</button>
                </form>
                <footer>
                    Existing users, sign in
                    <a href='LoginForm.js'>here</a>
                </footer>
            </div>
        </body>
    </html>
}

export default SignUpForm;