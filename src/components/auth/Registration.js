import React, {useState} from 'react'
import axios from 'axios'

function Registration(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (event) => {
        console.log('イベント発火')

        let data = JSON.stringify({
            user: {
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }
        })

        axios.post("https://renspa-rails-backend.herokuapp.com/signup",
            data,
            {headers:{"Content-Type" : "application/json"}},
            { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                props.handleSuccessfulAuthentication(response.data)
            }
        }).catch(error => {
            console.log("registration error", error)
        })
        event.preventDefault()
    }

    return (
        <div>
            <h3>新規登録</h3>

            <form onSubmit={handleSubmit}>
                <input
                    className = "registration-form"
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className = "registration-form"
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    className = "registration-form"
                    type="password"
                    name="passwordConfirmation"
                    placeholder="確認用パスワード"
                    value={passwordConfirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                />
                <button className = "registration-submit-button" type="submit">登録</button>
            </form>
        </div>
    )
}

export default Registration;