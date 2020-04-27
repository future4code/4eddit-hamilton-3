import React, { Component } from "react";



class LoginPage extends Component {

  state = {

    email: "",
    password: ""

  }

  handleFieldChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleLogin = (event) => {
    event.preventDefault()
    this.props.login(this.state.email,
      this.state.password)
  }



  render() {
    const { email, password } = this.state;

    return (
      
        <div >
          <label>
            
          </label>

          <input
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            required
          />
          <input
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            required
          />
             <button
          type="submit"
        >Entrar
        </button>
        <button
          type="submit"
        >Cadastrar
        </button>

        </div>
    )}
    
  
}

export default LoginPage;
