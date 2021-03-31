import Link from 'next/link'
import { useState } from 'react'

export default function LoginForm() {
    const [show, submitForm] = useState( true );
    
    console.log('LoginForm');

    return (
        show ? 
        <div className="container">
                <Link href="/"><a>Back to home</a></Link>
                <form className="form-signin" onSubmit={ (e) => {e.preventDefault(); submitForm(false); this.props.history('/');}}>
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor ="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
                <label htmlFor ="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
            <style jsx global> {
                `
                * {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                html {
                    font-size: 10px;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    font-family: sans-serif;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
                body {
                    padding-top: 40px;
                    padding-bottom: 40px;
                    background-color: #eee;
                    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: #333;
                    display: block;
                    margin: 8px;
                }

                :after, :before {
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                }
                `
            }
            </style>
        </div>
        : 
        null
        )
}