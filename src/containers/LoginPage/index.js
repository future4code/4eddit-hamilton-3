import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as todoActions from "../../actions/todoPosts"



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
    event.preventDefault();

    this.props.login(this.state.email, this.state.password);
    console.log(this.state)}



  render() {
    const { email, password } = this.state;

    return (
      
        <form onSubmit={this.handleLogin}>
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
            //  onClick={this.handleLogin}
          type="submit"
        >Entrar
        </button>
        <button
          type="submit"
        >Cadastrar
        </button>

        </form>
    )}
  }



const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch)


export default connect(null, mapDispatchToProps)(LoginPage)

