import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    changeUser(value) {
        this.setState( {username: value} )
    }

    changePass(value) {
        this.setState( {password: value} )
    }

    render() {
        return(
            <div>
                <label htmlFor='username'>Username:
                    <input id="username" onChange={ (e) => this.changeUser(e.target.value) }></input>
                </label>
                <label htmlFor='password'>Password:
                    <input id='password' onChange={ (e) => this.changePass(e.target.value) }></input>
                </label>
                <button onClick={ () => alert(`username: ${this.state.username}, password: ${this.state.password}`) }>Login</button>
            </div>
        )
    }
}

export default Login