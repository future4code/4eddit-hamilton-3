import React, { Component } from "react";
import { connect} from "react-redux"
import { bindActionCreators, dispatch } from 'redux'
import * as todoActions from "../../actions/todoPosts"
import {WrapperLogin} from "./styled"
import { push} from "connected-react-router";
import { routes } from "../Router/index"




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
        <WrapperLogin>

    <form onSubmit={this.handleLogin}>
      
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

          
      </form>
             <button
                type="submit"
                onClick={this.props.redirectSignup}
              >Cadastrar
              </button>

      
        </WrapperLogin>
    )}
  }



const mapDispatchToProps = dispatch => 
  bindActionCreators(todoActions, dispatch)
 

export default connect(null, mapDispatchToProps)(LoginPage)

