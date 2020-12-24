import React, {useState} from 'react'
import axios from 'axios'

function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        console.log('イベント発火')

        let data = JSON.stringify({
            user: {
                email: email,
                password: password,
            }
        })

        axios.post("http://localhost:5000/login",
            data,
            {headers:{"Content-Type" : "application/json"}},
            { withCredentials: true }
        ).then(response => {
            console.log("login response: ", response)
            if (response.data.logged_in) {
                props.handleSuccessfulAuthentication(response.data)
            }
        }).catch(error => {
            console.log("registration error", error)
        })
        event.preventDefault()
    }

    return (
        <div>
            <h3>ログイン</h3>

            <form onSubmit={handleSubmit}>
                <input
                    className = "login-form"
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className = "login-form"
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className = "login-submit-button" type="submit">ログイン</button>
            </form>
        </div>
    )
}

export default Login;