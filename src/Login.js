import { useState } from "react"

export default function Login() {
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");

    const[message , setMessage] = useState("");

    function SignInHandler() {
       setMessage("Loading...");
        if(email == 'abc@gmail.com' && password == 'abc*123'){
            setTimeout(()=>{
                setMessage('Successfully Logged in...')
            } , 3000)
        }
        else {
            setTimeout(()=>{
                setMessage('Invalid Credentials')
            }, 3000)
           
        }
    }

    return <div>
        <h1>Login</h1>
        <input type = "text" placeholder="Email" onChange={(e) =>setEmail(e.target.value)} /> <br/>
        <input type = "password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)}/> <br/>
        <button onClick={SignInHandler}>SignIn</button>
        {message && <p>{message}</p>}
    </div>
}